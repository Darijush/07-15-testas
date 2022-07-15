function testimonials (selector1, data) {
    if (!Array.isArray(data)
    || data.length === 0) {
        console.error('This function requires data');
        return;
    }

    const DOM = document.querySelector(selector1);
    
    function starGenerator(num){
        let starHTML = '';
    for (let i = 0; i < num; i++) {
        starHTML += `<i class="fa fa-star" aria-hidden="true"></i>`;
    }
    for (let j = 0; j < 5 - num; j++) {
        starHTML += `<i class="fa fa-star-o" aria-hidden="true"></i>`;
    }
    return starHTML;
    };

    let HTML3 = '';

    for (let k = 1; k <= data.length; k++) {
        HTML3 += `<span class="dot" onclick="currentSlide(${k})"></span>`;
    }

    let HTML = '';

    for (const item of data) {
        HTML += `<div class="testimonials-slide">
        <div style="height: 100px;">
            <img src="${item.avatar}" class="testimonialsImg">
        </div>
        <h3 class="clientName">${item.clientName}</h3>
        <h5 class="clientPlace">
            ${item.clientPlace}
        </h5>
        <div class="stars">
            ${starGenerator(item.rating)}
        </div>
            <p>${item.clientComment}</p>
        </div>`;
    }
    HTML += `<div id="dotSection" class="dotsPlace">
    ${HTML3}
    </div>`;
 
    DOM.innerHTML = HTML;



    return true
}

export { testimonials }