export const accordeon = () => {
    const list = document.querySelector('.faq__list');
    list.addEventListener('click', e => {
        const button = e.target.closest('.faq__question'); //Записали в button элемент, с которым было произведено действие


    })
}