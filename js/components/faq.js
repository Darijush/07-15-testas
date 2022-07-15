function faq(selector, data){
    // validuojame atejusius duomenis
    const inputResult = isValidFaqInput(selector, data);
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
        if (!isValidFaqItem(item)){
            continue;
        }

        HTML += `<div class="col-12 col-md-6">
        <button class="accordion">${item.title}</button>
        <div class="panel">
            <p>${item.description}</p>
        </div>
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


function isValidFaqInput(selector,data){
    if (typeof selector !== 'string'
        || selector === ''){
            return 'Services funtion requires non-empty array of data'
        }

    return true;
}

function isValidFaqItem(data) {
    if (typeof data !== 'object'
        || data === null
) {
        return false;
    }
    return true;
}


export {faq}