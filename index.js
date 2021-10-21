let preSaleBtn, modal, mnstrBtn, mnstrModal, mnstrModal_exit

preSaleBtn = document.querySelector('.about__button');
modal = document.querySelector('.modal')
mnstrBtn = document.querySelector('.mnstr__button')
mnstrModal = document.querySelector('.mnstr-address__modal')
mnstrModal_exit = document.querySelector('.mnstr-address__modal--exit-1')
mnstrModal_exit2 = document.querySelector('.mnstr-address__modal--exit-2')


preSaleBtn.addEventListener('click', function(){
    modal.style.display = 'block'
})

mnstrBtn.addEventListener('click', function(){
    mnstrModal.style.display = 'block'
})

document.addEventListener('keydown', function(event){
    if (event.key === 'Escape') {
        modal.style.display = 'none'
    }
})

mnstrModal_exit.addEventListener('click', function(){
    modal.style.display = 'none'
})

mnstrModal_exit2.addEventListener('click', function(){
    mnstrModal.style.display = 'none'
})