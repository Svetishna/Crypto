const advBtn = document.querySelectorAll('.advantage__btn');
const advItem = document.querySelectorAll('.advantage__item-content');

advBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        advItem.forEach((item, j) => {
            if (i === j) {
                //Кнопка и контент с нужным индексом получают активный класс при нажатии
                advBtn[j].classList.add('advantage__btn_active');
                advItem[j].classList.add('advantage__item-content_active');
            } else {
                advBtn[j].classList.remove('advantage__btn_active');
                advItem[j].classList.remove('advantage__item-content_active');
            }
        })
    })
})