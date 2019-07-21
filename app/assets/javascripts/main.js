function selectCrypto (elm) {
    if(elm.classList.contains('inactive')) {
        const currentActiveElm = document.querySelector('.active');
        elm.classList.remove('inactive');
        currentActiveElm.classList.remove('active');
        elm.classList.add('active');
        currentActiveElm.classList.add('inactive');
        elm.parentElement.classList.remove('col-md-4');
        currentActiveElm.parentElement.classList.add('col-md-4');
        elm.parentElement.parentElement.insertBefore(elm.parentElement, currentActiveElm.parentElement);
        currentActiveElm.parentElement.parentElement.appendChild(currentActiveElm.parentElement);
    } else {
        const nextActiveElm = elm.parentElement.parentElement.children[1].firstElementChild;
        elm.classList.remove('active');
        nextActiveElm.classList.remove('inactive');
        elm.classList.add('inactive');
        nextActiveElm.classList.add('active');
        elm.parentElement.parentElement.appendChild(elm.parentElement);
        nextActiveElm.parentElement.classList.remove('col-md-4');
        elm.parentElement.classList.add('col-md-4');
    }
    window.scrollTo(0, 0);
}

window.addEventListener('keydown', (e) => {
    if(e.keyCode === 32) selectCrypto(document.querySelector('.active')); // Space Key
});
