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
        desc_details: hiking_desc_details,
        price: hiking_price,
        review : hiking_reviews,
        tag: 'Hiking'
    }

    const camping=
    {
        pict_similiar: camping_pict_similiar,
        pict_details : camping_pict_details,
        pict: camping_pict,
        name: camping_name,
        desc_details: camping_desc_details,
        price: camping_price,
        review : camping_reviews,
        tag: 'Camping'
    }

    const fishing=
    {
        pict_similiar: fishing_pict_similiar,
        pict_details : fishing_pict_details,
        pict: fishing_pict,
        name: fishing_name,
        desc_details: fishing_desc_details,
        price: fishing_price,
        review : fishing_reviews,
        tag: 'Fishing'
    }

    if (tag == 0) data = hiking
    else if (tag == 1) data = camping
    else data = fishing

    // print details
    const detailsPage = document.querySelector(".rent-details-container");

    let code =
    `
    <div class="rent-details-product">
        <div class="rent-product-image">
            <img src="${data.pict_details[index]}" alt="">
        </div>
        <div class="rent-product-details">
            <div class="product-details-box">
                <div class="product-rent-title">
                    <h1>${data.name[index]}</h1>
                </div>
                <div class="rent-product-ratings">
                    <div class="details-ratings-box">
                        <div class="rent-ratings-box">
                            <img src="../../Assets/img/icon/star.png" alt="">
                        </div>  
                        <div class="rent-ratings-box">
                            <img src="../../Assets/img/icon/star.png" alt="">
                        </div>  
                        <div class="rent-ratings-box">
                            <img src="../../Assets/img/icon/star.png" alt="">
                        </div>  
                        <div class="rent-ratings-box">
                            <img src="../../Assets/img/icon/star.png" alt="">
                        </div>  
                        <div class="rent-ratings-box">
                            <img src="../../Assets/img/icon/star.png" alt="">
                        </div>  
                        <div class="rent-ratings-box">
                            <img src="../../Assets/img/icon/star.png" alt="">
                        </div>  
                    </div>
                    <div class="reviews-total">
                        <p>(${data.review[index]} Reviews)</p>
                    </div>
                </div>
                <div class="rent-details-price">
                    <p><span>${data.price[index]}</span> /Day</p>
                </div>
                <div class="rent-details-description">
                    <p>${data.desc_details[index]}</p>
                </div>
                <div class="tags">
                    <div class="tags-title">
                        <p>Tags: </p>
                    </div>
                    <div class="tags-info" id="${data.tag}">
                        <a href="">${data.tag}</a>
                    </div>
                </div>
                <div class="rent-button">
                    <a href="">Rent Now</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Reviews -->
    <div class="rent-review-container">
        <div class="rent-review">
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

    code = code.concat
    (
        `
                </div>
                </div>
            </div>
        </div>
        <!-- Reviews ENd -->


        <!-- Similiar product -->
        <div class="similiar-rent-container">
            <div class="similiar-title">
                <h2>Similiar Product</h2>
                <div class="similiar-lines"></div>
            </div>
            <div class="rent-similiar-content">
    `)

    let count = 0;
    for(let i =+index+1;i<index+4;i++){
        if(count ==3)
        {
            break;
        }
        count++;
        let temp_index = (i>data.pict.length -1)? i-data.pict.length : i;
        code = code.concat(
        `
        <div class="content-box">
        <div class="img-rent">
            <img src="${data.pict_similiar[temp_index]}" alt="">
        </div>
        <div class="content-desc">
            <div class="rent-price">
                <div class="rent-icon">
                    <img src="../../Assets/img/icon/price.png" alt="">
                </div>
                <div class="rent-price-day">
                    <p><b>${data.price[temp_index]} </b>/Day</p>
                </div>
            </div>
            <div class="rent-product">
                <h2>${data.name[temp_index]}</h2>
            </div>
            <div class="item-rating">
                <div class="rating-box">
                    <div class="rating-star">
                        <img src="../../Assets/img/icon/star.png" alt="">
                    </div>
                    <div class="rating-star">
                        <img src="../../Assets/img/icon/star.png" alt="">
                    </div>
                    <div class="rating-star">
                        <img src="../../Assets/img/icon/star.png" alt="">
                    </div>
                    <div class="rating-star">
                        <img src="../../Assets/img/icon/star.png" alt="">
                    </div>
                    <div class="rating-star">
                        <img src="../../Assets/img/icon/star.png" alt="">
                    </div>
                </div>
                <div class="rating-info">
                    <p> (${data.review[temp_index]} Reviews)</p>
                </div>
            </div>
            <div class="tags-container">
                <div class="tags">
                    <div class="tags-title">
                        <p>Tags: </p>
                    </div>
                    <div class="tags-info" id="${data.tag}">
                        <a href="">${data.tag}</a>
                    </div>
                </div>
            </div>
            <div class="rent-btn">
                <div class="choose-destination">
                    <a href="">Rent Now</a>
                </div>
            </div>
        </div>
        </div>
        `
        )
    }
    code = code.concat
    (`
        </div>
    </div>
    <!-- Similiar product end -->
    `)
    detailsPage.innerHTML += code;
}
