
let hiking = document.getElementById("Hikingmenu");
let camping = document.getElementById("Campingmenu");
let fishing = document.getElementById("Fishingmenu");

const products = document.querySelector(".destination-content-details");
function printItems([ img, visited,name, desc, location,price,tags,idxcards])
{
    let code = 
    `
    <div class="destination-boxs">
        <div class="img-box">
            <img id="pic" src="${img}" alt="">
        </div>
        <div class="destination-title-box">
            <h2 id="destination-name">${name}</h2>
            <div class="visited">
                <p><b id="num">${visited}x</b> Visited</p>
            </div>
            <p class="destination-desc">${desc}</p>
            <div class="tags">
                <div class="tags-title">
                    <p>Tags: </p>
                </div>
                <div class="tags-info" id="${tags}">
                    <a href="">${tags}</a>
                </div>
            </div>
            <div class="title-info">
                <div class="baris-info">
                    <div class="info-box">
                        <img src="../Assets/img/icon/location.png" alt="">
                        <div class="text-title-info">
                            <p id="loc">${location}</p>
                        </div>
                    </div>
                    <div class="info-box">
                        <img src="../Assets/img/icon/time.png" alt="">
                        <div class="text-title-info">
                            <p>1 Week</p>
                        </div>
                    </div>
                </div>
                <div class="baris-info">
                    <div class="info-box">
                        <img src="../Assets/img/icon/price.png" alt="">
                        <div class="text-title-info">
                            <p><span id="price"> ${price}</span>/package</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="choose-destination">
                <a href="../Details/Adventure/adventure-details.html?index=${idxcards}&tag=${index}" onclick="details(${idxcards})">Choose This Destination</a>
            </div>
        </div>
    </div>
    `;
    products.innerHTML += code;
}

products.innerHTML = "";
for (let i = 0; i < 6; i++)
{
    printItems([hiking_pict[i],hiking_visited[i],hiking_name[i],hiking_desc[i],hiking_location[i],hiking_price[i],tags[0],idxcards]);
    idxcards++;
}

function Hiking(component) 
{
    index = 0;
    idxcards = 0;
    component.style.backgroundColor = "#3A6FE5";
    component.style.color = "white";
    camping.style.backgroundColor = "white";
    camping.style.color = "#3A6FE5";
    fishing.style.backgroundColor = "white";
    fishing.style.color = "#3A6FE5";
    products.innerHTML = "";
    for (let i = 0; i < 6; i++)
    {
        printItems([hiking_pict[i],hiking_visited[i],hiking_name[i],hiking_desc[i],hiking_location[i],hiking_price[i],tags[0],idxcards]);
        idxcards++;

    }
}

function Camping(component) 
{
    index = 1;
    idxcards = 0;
    hiking.style.backgroundColor = "white";
    hiking.style.color = "#3A6FE5";
    component.style.backgroundColor = "#3A6FE5";
    component.style.color = "white";
    fishing.style.backgroundColor = "white";
    fishing.style.color = "#3A6FE5";
    
    products.innerHTML = "";
    for (let i = 0; i < 6; i++)
    {
        printItems([camping_pict[i],camping_visited[i],camping_name[i],camping_desc[i],camping_location[i],camping_price[i],tags[1],idxcards]);
        idxcards++;

    }
}

function Fishing(component) 
{
    index = 2;
    idxcards = 0;
    hiking.style.backgroundColor = "white";
    hiking.style.color = "#3A6FE5";
    camping.style.backgroundColor = "white";
    camping.style.color = "#3A6FE5";
    component.style.backgroundColor = "#3A6FE5";
    component.style.color = "white";
    
    products.innerHTML = "";
    for (let i = 0; i < 6; i++)
    {
        printItems([fishing_pict[i],fishing_visited[i],fishing_name[i],fishing_desc[i],fishing_location[i],fishing_price[i],tags[2],idxcards]);
        idxcards++;
    }
}


function details(key) {
    console.log("masuk");
    // printDetails([hiking_pict[key],hiking_visited[key],hiking_name[key],hiking_desc_details[key],hiking_location[key],hiking_price[key],tags[0],idxcards]);
}