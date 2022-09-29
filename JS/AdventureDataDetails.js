/**
 * http://127.0.0.1:3000/Details/Adventure/adventure-details.html?index=0&tag=0
 * 
 */

function load () {
    const params = new URLSearchParams(window.location.search);
    const index = params.get('index');
    const tag = params.get('tag');
    let reviews
    const review = {
        image: review_image,
        name: review_name,
        period: review_period,
        ratings: review_ratings,
        comment: review_comment
    }

    let data
    const hiking = {
        pict_similiar: hiking_pict_similiar,
        pict_details : hiking_pict_details,
        pict: hiking_pict,
        name: hiking_name,
        visited: hiking_visited,
        desc_details: hiking_desc_details,
        location: hiking_location,
        desc: hiking_desc,
        price: hiking_price,
        tag: 'Hiking'
    }

    const camping=
    {
        pict_similiar: camping_pict_similiar,
        pict_details : camping_pict_details,
        pict: camping_pict,
        name: camping_name,
        visited: camping_visited,
        desc_details: camping_desc_details,
        location: camping_location,
        desc: camping_desc,
        price: camping_price,
        tag: 'Camping'
    }

    const fishing=
    {
        pict_similiar: fishing_pict_similiar,
        pict_details : fishing_pict_details,
        pict: fishing_pict,
        name: fishing_name,
        visited: fishing_visited,
        desc_details: fishing_desc_details,
        location: fishing_location,
        desc: fishing_desc,
        price: fishing_price,
        tag: 'Fishing'
    }

    if (tag == 0) data = hiking
    else if (tag == 1) data = camping
    else data = fishing

    // print details
    const detailsPage = document.querySelector(".details-container");

    let code =
    `
    <!-- Jumbotron -->
        <div class="details-image">
            <img src="${data.pict_details[index]}">
        </div>

        <!-- Destination Content -->
        <div class="destination-content-container">
            <div class="destination-text">
                <div class="destination-title-box-details">
                    <h2>${data.name[index]}</h2>
                    <div class="visited">
                        <p><b>${data.visited[index]}x</b> Visited</p>
                    </div>
                    <p class="destination-desc">${data.desc_details[index]}</p>
                    <div class="tags">
                        <div class="tags-title">
                            <p>Tags: </p>
                        </div>
                        <div class="tags-info" id="${data.tag}">
                            <a href="">${data.tag}</a>
                        </div>
                    </div>
                    <div class="title-info"> 
                        <div class="baris-2">
                            <div class="baris-info">
                                <div class="info-box">
                                    <img src="../../Assets/img/icon/location.png" alt="">
                                    <div class="text-title-info">
                                        <p>${data.location[index]}</p>
                                    </div>
                                </div>
                                <div class="info-box">
                                    <img src="../../Assets/img/icon/time.png" alt="">
                                    <div class="text-title-info">
                                        <p>1 Week</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="baris-info">
                            <div class="info-box">
                                <img src="../../Assets/img/icon/price.png" alt="">
                                <div class="text-title-info">
                                    <p><span>${data.price[index]} </span>/package</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="choose-destination">
                        <a href="">Choose This Destination</a>
                    </div>
                </div>
            </div>
            <div class="destination-facility-container">
                <div class="destination-facility">
                    <div class="facility-title">
                        <h2>Facilities</h2>
                        <div class="facility-lines"></div>
                    </div>
                    <div class="facility-info">
                        <div class="facility-info-container">
                            <div class="facility-info-box">
                                <img src="../../Assets/img/icon/wifi.png" alt="">
                                <p>Free Wifi</p>
                            </div>
                            <div class="facility-info-box">
                                <img src="../../Assets/img/icon/parking.png" alt="">
                                <p>Free Parking</p>
                            </div>
                            <div class="facility-info-box">
                                <img src="../../Assets/img/icon/restoran.png" alt="">
                                <p>Free Food</p>
                            </div>
                            <div class="facility-info-box">
                                <img src="../../Assets/img/icon/clean.png" alt="">
                                <p>Air Conditioner</p>
                            </div>
                        </div>
                        <div class="facility-info-container">
                            <div class="facility-info-box">
                                <img src="../../Assets/img/icon/wifi.png" alt="">
                                <p>Free Wifi</p>
                            </div>
                            <div class="facility-info-box">
                                <img src="../../Assets/img/icon/parking.png" alt="">
                                <p>Free Parking</p>
                            </div>
                            <div class="facility-info-box">
                                <img src="../../Assets/img/icon/restoran.png" alt="">
                                <p>Free Food</p>
                            </div>
                            <div class="facility-info-box">
                                <img src="../../Assets/img/icon/clean.png" alt="">
                                <p>Air Conditioner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="destination-review-container">
            <div class="destination-review">
                <div class="review-title">
                    <h2>Review</h2>
                    <div class="review-lines"></div>
                </div>
                <div class="review-content">
                    <div class="review-slider-container">
    `;

    for(let i =0;i<review.image.length;i++){
        code = code.concat(
        `
        <div class="review-content-box">
             <div class="review-content-box-img">
                 <img src="${review.image[i]}" alt="">
             </div>
             <div class="review-content-box-text">
                 <p>${review.name[i]}</p>
                 <p>${review.period[i]}</p>
                 <div class="review-ratings">
                     <p>${review.ratings[i]}</p>
                 </div>
             </div>
             <div class="review-text">
                 <p>${review.comment[i]}</p>
             </div>
         </div>
        `)
    }


    code = code.concat(
        `
                    </div>
                </div>
            </div>
        </div>

        <!-- Similiar Destination -->
        <div class="similiar-destination-container">
            <div class="similiar-title">
                <h2>Similiar Destination</h2>
                <div class="similiar-lines"></div>
            </div>
            <div class="destination-content-page">
        `
    )
    let count = 0;
    for (let i = +index + 1; i < index+4; i++)
    {
        if(count == 3)
        {
            break;
        }
        count++;
        let temp_index = (i > data.pict.length - 1) ? i - data.pict.length : i;
        code = code.concat(
            `
            <div class="destination-boxs">
                <div class="img-box">
                    <img id="pic" src="${data.pict_similiar[temp_index]}" alt="">
                </div>
                <div class="destination-title-box">
                    <h2 id="destination-name">${data.name[temp_index]}</h2>
                    <div class="visited">
                        <p><b id="num">${data.visited[temp_index]}x</b> Visited</p>
                    </div>
                    <p class="destination-desc">${data.desc[temp_index]}</p>
                    <div class="tags">
                        <div class="tags-title">
                            <p>Tags: </p>
                        </div>
                        <div class="tags-info" id="${data.tag}">
                            <a href="">${data.tag}</a>
                        </div>
                    </div>
                    <div class="title-info">
                        <div class="baris-info">
                            <div class="info-box">
                                <img src="../../Assets/img/icon/location.png" alt="">
                                <div class="text-title-info">
                                    <p id="loc">${data.location[temp_index]}</p>
                                </div>
                            </div>
                            <div class="info-box">
                                <img src="../../Assets/img/icon/time.png" alt="">
                                <div class="text-title-info">
                                    <p>1 Week</p>
                                </div>
                            </div>
                        </div>
                        <div class="baris-info">
                            <div class="info-box">
                                <img src="../../Assets/img/icon/price.png" alt="">
                                <div class="text-title-info">
                                    <p><span id="price"> ${data.price[temp_index]}</span>/package</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="choose-destination">
                        <a href="/Details/Adventure/adventure-details.html?index=${idxcards}&tag=${index}" onclick="details(${idxcards})">Choose This Destination</a>
                    </div>
                </div>
            </div>
            `
        )
    }

    code = code.concat(`</div>
    </div>
    <!-- Similiar Destination End-->`)

    detailsPage.innerHTML += code;
}