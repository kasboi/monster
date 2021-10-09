let preSaleBtn, modal, mnstrBtn, mnstrModal, mnstrModal_exit

preSaleBtn = document.querySelector('.about__button');
modal = document.querySelector('.modal')
mnstrBtn = document.querySelector('.mnstr__button')
mnstrModal = document.querySelector('.mnstr-address__modal')
mnstrModal_exit = document.querySelector('.mnstr-address__modal--exit')

preSaleBtn.addEventListener('click', function(){
    modal.style.display = 'block'
})

mnstrBtn.addEventListener('click', function(){
    mnstrModal.style.display = 'block'
})

document.addEventListener('keydown', function(event){
    console.log(event);
    if (event.key === 'Escape') {
        modal.style.display = 'none'
    }
})

mnstrModal_exit.addEventListener('click', function(){
    mnstrModal.style.display = 'none'
})