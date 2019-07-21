function nextCrypto(elm) {
    const card = document.querySelector('.selected');
    let parent = card.parentElement;
    parent.classList.add('col-md-4');
    let index = parseInt(card.getAttribute('data-index')) + 1;
    if(index > 6) index = 0;
    let next = document.querySelector(`.card[data-index="${index}"]`);
    card.classList.add('muted');
    card.classList.remove('selected');
    parent.parentElement.appendChild(parent);
    next.classList.remove('muted');
    next.classList.add('selected');
    next.parentElement.classList.remove('col-md-4');
}

window.addEventListener('keydown', (e) => {
    if(e.keyCode === 32) nextCrypto();
});
