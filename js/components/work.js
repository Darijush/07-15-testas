function work(data) {
    if (!Array.isArray(data)
    || data.length === 0) {
        console.error('This function requires data');
        return;
    }

    const DOM = document.querySelector('#work_block');

    let HTML = '';

    for (const item of data) {
        HTML += `<div class="block col-12 col-md-3">
        <img src="./img/work_thumb_${item.icon}.png" class="avatar">
        <h4 class="title">${item.title}</h4>
        <p class="description">${item.description}</p>
    </div>`;
    }

    DOM.innerHTML = HTML;


    return true
}

export { work }