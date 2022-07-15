function features(selector, data){
    // validuojame atejusius duomenis
    const inputResult = isValidFeatureInput(selector, data);
    if (inputResult !== true){
        return console.error(inputResult);
    }

    //logika
    
    const DOM = document.querySelector(selector);
    if (!DOM){
        return console.error('Nerastas elementas i kuri reikia sugeneruoti nauja turini');
    }

    let HTML = '';


    for (const item of data) {
        if (!isValidFeatureItem(item)){
            continue;
        }

        HTML += `<div class="col-12 col-md-6 col-lg-4 futures">
                <img class="featureimage" src="./img/${item.icon}" alt="image">
                <h3 class="title">${item.title}</h3>
                <p class="description">${item.description}</p>
                </div>`;
    }
    
    //validuojame rezultata
    if(HTML === ''){
        return console.error('Duomenyse nera korektiskos informacijos');   
    }

    //graziname rezultata
    DOM.innerHTML = HTML;

    return true;
}


function isValidFeatureInput(selector,data){
    if (typeof selector !== 'string'
        || selector === ''){
            return 'Services funtion requires non-empty array of data'
        }

    return true;
}

function isValidFeatureItem(data) {
    if (typeof data !== 'object'
        || data === null
        || Array.isArray(data)
        || typeof data.icon !== 'string'
        || !data.icon  
        || data.icon.length > 30
        || typeof data.title !== 'string'
        || !data.title
        || data.title.length > 20
        || typeof data.description !== 'string'
        || !data.description
        || data.description.length > 100
        || Object.keys(data).length !== 3) {
        return false;
    }
    return true;
}


export {features}