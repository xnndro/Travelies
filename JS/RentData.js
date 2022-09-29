let tags = ["Hiking","Camping","Fishing"]
let idxcards = 0;
let index = 0;
let hiking_pict = ["../Assets/img/Rent/Hiking/Sepatu.png",
                    "../Assets/img/Rent/Hiking/lowoko.png",
                    "../Assets/img/Rent/Hiking/botol.png",
                    "../Assets/img/Rent/Hiking/stik.png",
                    "../Assets/img/Rent/Hiking/lighter.png",
                    "../Assets/img/Rent/Hiking/jaket.png"]
let hiking_pict_similiar = ["../../Assets/img/Rent/Hiking/Sepatu.png",
                    "../../Assets/img/Rent/Hiking/lowoko.png",
                    "../../Assets/img/Rent/Hiking/botol.png",
                    "../../Assets/img/Rent/Hiking/stik.png",
                    "../../Assets/img/Rent/Hiking/lighter.png",
                    "../../Assets/img/Rent/Hiking/jaket.png"]
let hiking_pict_details = ["../../Assets/img/Details/Rent/Hiking/sepatu-rent.png",
                            "../../Assets/img/Details/Rent/Hiking/loowoko.png",
                            "../../Assets/img/Details/Rent/Hiking/botol.png",
                            "../../Assets/img/Details/Rent/Hiking/stik.png",
                            "../../Assets/img/Details/Rent/Hiking/lighter.png",
                            "../../Assets/img/Details/Rent/Hiking/jaket.png"]
let hiking_price = ["IDR 100.000,-","IDR 250.000,-","IDR 50.000,-","IDR 200.000,-","IDR 50.000,-","IDR 150.000,-"]
let hiking_name = ["Mountain Shoes","Loowoko Pack","Tunturi Bottle","Hiking Stick","Lighter","Jacket"]
let hiking_reviews = ["5000","2000","4000","1000","7000","2000"]
let hiking_desc_details = ["Mountain walking or hiking boots are designed for mountain and hill walking, backpacking and mountaineering. Crampons can be attached to them for a better grip on glaciers or hard-packed snow. They are extremely strong, durable, and have stiff soles to give the ankles support and protection on difficult rocky trails.",
                            "A backpack—also called knapsack, schoolbag, rucksack, rucksac, pack, sackpack, booksack, bookbag or backsack—is, in its simplest frameless form, a fabric sack carried on one's back and secured with two straps that go over the shoulders, but it can have an external frame, internal frame, and there are bodypacks.",
                            "A water bottle is a container that is used to hold water, liquids or other beverages for consumption. The use of a water bottle allows an individual to drink and transport a beverage from one place to another. A water bottle is usually made of plastic, glass, or metal.",
                            "Trekking poles or Hiking Sticks are a common hiking accessory that function to assist walkers with their rhythm, to provide stability, and reduce strain on joints on rough terrain.",
                            "This lighter is a portable device which generates a flame, and can be used to ignite a variety of items, such as cigarettes, gas stoves, fireworks, candles or campfires",
                            "A jacket is a garment for the upper body, usually extending below the hips. A jacket typically has sleeves, and fastens in the front or slightly on the side. A jacket is generally lighter, tighter-fitting, and less insulating than a coat, which is outerwear."]

let camping_pict = ["../Assets/img/Rent/Camping/sepatu.png",
                    "../Assets/img/Rent/Camping/tent.png",
                    "../Assets/img/Rent/Camping/stove.png",
                    "../Assets/img/Rent/Camping/stik.png",
                    "../Assets/img/Rent/Camping/lighter.png",
                    "../Assets/img/Rent/Camping/gas.png"]
let camping_pict_similiar = ["../../Assets/img/Rent/Camping/sepatu.png",
                    "../../Assets/img/Rent/Camping/tent.png",
                    "../../Assets/img/Rent/Camping/stove.png",
                    "../../Assets/img/Rent/Camping/stik.png",
                    "../../Assets/img/Rent/Camping/lighter.png",
                    "../../Assets/img/Rent/Camping/gas.png"]
let camping_pict_details = ["../../Assets/img/Details/Rent/Hiking/sepatu-rent.png",
                    "../../Assets/img/Details/Rent/Camping/tent.png",
                    "../../Assets/img/Details/Rent/Camping/kompor.png",
                    "../../Assets/img/Details/Rent/Hiking/stik.png",
                    "../../Assets/img/Details/Rent/Hiking/lighter.png",
                    "../../Assets/img/Details/Rent/Camping/gas.png"]
let camping_price = ["IDR 100.000,-","IDR 250.000,-","IDR 50.000,-","IDR 200.000,-","IDR 50.000,-","IDR 150.000,-"]
let camping_name = ["Mountain Shoes","Tent","Portable Stove","Hiking Stick","Lighter","Butane Gas"]
let camping_reviews = ["5000","2000","4000","1000","7000","2000"]
let camping_desc_details = ["Mountain walking or hiking boots are designed for mountain and hill walking, backpacking and mountaineering. Crampons can be attached to them for a better grip on glaciers or hard-packed snow. They are extremely strong, durable, and have stiff soles to give the ankles support and protection on difficult rocky trails.",
                            "A tent is a shelter consisting of sheets of fabric or other material draped over, attached to a frame of poles or attached to a supporting rope. While smaller tents may be free-standing or attached to the ground, large tents are usually anchored using guy ropes tied to stakes or tent pegs.",
                            "A portable stove is a cooking stove specially designed to be portable and lightweight, used in camping, picnicking, backpacking, or other use in remote locations where an easily transportable means of cooking or heating is needed",
                            "Trekking poles or Hiking Sticks are a common hiking accessory that function to assist walkers with their rhythm, to provide stability, and reduce strain on joints on rough terrain.",
                            "This lighter is a portable device which generates a flame, and can be used to ignite a variety of items, such as cigarettes, gas stoves, fireworks, candles or campfires",
                            "Butane is a gas at room temperature and atmospheric pressure. Butane is a highly flammable, colorless, easily liquefied gas that quickly vaporizes at room temperature. The name butane comes from the root but- and the suffix -ane."]

let fishing_pict = ["../Assets/img/Rent/Fishing/Net.png",
                    "../Assets/img/Rent/Fishing/gloves.png",
                    "../Assets/img/Rent/Fishing/rod.png",
                    "../Assets/img/Rent/Fishing/hat.png",
                    "../Assets/img/Rent/Fishing/vest.png",
                    "../Assets/img/Rent/Fishing/bait.png"]
let fishing_pict_similiar = ["../../Assets/img/Rent/Fishing/Net.png",
                    "../../Assets/img/Rent/Fishing/gloves.png",
                    "../../Assets/img/Rent/Fishing/rod.png",
                    "../../Assets/img/Rent/Fishing/hat.png",
                    "../../Assets/img/Rent/Fishing/vest.png",
                    "../../Assets/img/Rent/Fishing/bait.png"]
let fishing_pict_details = ["../../Assets/img/Details/Rent/Fishing/net.png",
                    "../../Assets/img/Details/Rent/Fishing/gloves.png",
                    "../../Assets/img/Details/Rent/Fishing/rod.png",
                    "../../Assets/img/Details/Rent/Fishing/hat.png",
                    "../../Assets/img/Details/Rent/Fishing/vest.png",
                    "../../Assets/img/Details/Rent/Fishing/bait.png"]
let fishing_price = ["IDR 100.000,-","IDR 250.000,-","IDR 50.000,-","IDR 200.000,-","IDR 50.000,-","IDR 150.000,-"]
let fishing_name = ["Fishing Net","Gloves","Fishing Rod","Fishing Hat","Life Vest","Fishing Bait"]
let fishing_reviews = ["5000","2000","4000","1000","7000","2000"]
let fishing_desc_details = ["A fishing net is a net used for fishing. Nets are devices made from fibers woven in a grid-like structure. Some fishing nets are also called fish traps, for example fyke nets. Fishing nets are usually meshes formed by knotting a relatively thin thread.",
                            "A glove is a garment covering the hand. Gloves usually have separate sheaths or openings for each finger and the thumb.",
                            "A fishing rod is a long, thin rod used by fishermen to help catching fish by manipulating a line ending in a hook (formerly known as an angle, hence the term angling).",
                            "A fishing hat is a hat with a narrow, downward-sloping brim. Typically, the hat is made from heavy-duty cotton fabric such as denim or canvas, or heavy wool such as tweed, sometimes with metal eyelets placed on the crown of the hat for ventilation.",
                            "This is a personal defibrillator worn by a patient at risk for sudden cardiac arrest (SCA). It monitors the patient's heart continuously, and if the patient goes into a life-threatening arrhythmia, the LifeVest delivers a shock treatment to restore the patient's heart to normal rhythm",
                            "Fishing bait is any substance used to attract and catch fish, e.g. on the end of a fishing hook, or inside a fish trap. Traditionally, nightcrawlers, insects, worms and smaller bait fish have been used for this purpose. Fishermen have also begun using plastic bait and more recently, electronic lures to attract fish."]
let review_image = ["../../Assets/img/Details/Adventure/User/user1.png",
                    "../../Assets/img/Details/Adventure/User/user2.png",
                    "../../Assets/img/Details/Adventure/User/user3.png",
                    "../../Assets/img/Details/Adventure/User/user4.png",
                    "../../Assets/img/Details/Adventure/User/user5.png",
                    "../../Assets/img/Details/Adventure/User/user6.png"]
let review_name = ["Andriana","Letty","Bobby","Alice","Janny","Rudy"]
let review_period =["Jan 1, 2022","Feb 2, 2022","Mar 5, 2022", "Apr 6, 2022","June 8, 2022","Aug 6, 2022"]
let review_ratings = ["5.0/5.0","5.0/5.0","5.0/5.0","4.5/5.0","3.5/5.0","4.0/5.0"]
let review_comment = ["Wow, of all the gear I've tried, this gear really made an impression on my heart, those of you who read this review can make plans to try this gear, I guarantee you won't regret it.",
                    "The service was amazing, all the gears were very enjoyable, and I will invite all my family to use this gear. Isn't that a really fun thing? I can't wait for it too.",
                    "Cool, the gear is very useful, or even too useful. I am amazed by the service, and I believe you will also be amazed by the functionality.",
                    "Awesome, you will never see how useful this gear. I'm so happy!!!! This gear makes me feel relieved after working too long, so I can say this is the right refreshing gear for those of you who are tired of walking.",
                    "I was a little surprised that there is rust, but we are very happy for all the services and unforgettable experience.",
                    "I can't say anymore, this natural beauty is too magical. I have never found a gear as beautiful as this one. Everything is so beautiful, thank you for the experience!"]

const products = document.querySelector(".rent-content-page");
function printItems([ img,price,name,reviews,tags])
{
    let code = 
    `
    <div class="content-box-page">
        <div class="img-rent">
            <img src="${img}" alt="">
        </div>
        <div class="content-desc">
            <div class="rent-price">
                <div class="rent-icon">
                    <img src="../Assets/img/icon/price.png" alt="">
                </div>
                <div class="rent-price-day">
                    <p><b>${price}</b>/Day</p>
                </div>
            </div>
            <div class="rent-product">
                <h2>${name}</h2>
            </div>
            <div class="item-rating">
                <div class="rating-box">
                    <div class="rating-star">
                        <img src="../Assets/img/icon/star.png" alt="">
                    </div>
                    <div class="rating-star">
                        <img src="../Assets/img/icon/star.png" alt="">
                    </div>
                    <div class="rating-star">
                        <img src="../Assets/img/icon/star.png" alt="">
                    </div>
                    <div class="rating-star">
                        <img src="../Assets/img/icon/star.png" alt="">
                    </div>
                    <div class="rating-star">
                        <img src="../Assets/img/icon/star.png" alt="">
                    </div>
                </div>
                <div class="rating-info">
                    <p> (${reviews})</p>
                </div>
            </div>
            <div class="tags-container">
                <div class="tags">
                    <div class="tags-title">
                        <p>Tags: </p>
                    </div>
                    <div class="tags-info" id="${tags}">
                        <a href="">${tags}</a>
                    </div>
                </div>
            </div>
            <div class="rent-btn">
                <div class="choose-destination">
                    <a href="../Details/Rent/rent-details.html?index=${idxcards}&tag=${index}">Rent Now</a>
                </div>
            </div>
        </div>
    </div>
    `;
    products.innerHTML += code;
}

let hiking = document.getElementById("Hikingmenu");
let camping = document.getElementById("Campingmenu");
let fishing = document.getElementById("Fishingmenu");


products.innerHTML = "";
for (let i = 0; i < 6; i++)
{
    printItems([hiking_pict[i],hiking_price[i],hiking_name[i],hiking_reviews[i],tags[0]]);
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
        printItems([hiking_pict[i],hiking_price[i],hiking_name[i],hiking_reviews[i],tags[0]]);
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
        printItems([camping_pict[i],camping_price[i],camping_name[i],camping_reviews[i],tags[1]]);
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
        printItems([fishing_pict[i],fishing_price[i],fishing_name[i],fishing_reviews[i],tags[2]]); 
        idxcards++;

    }
}