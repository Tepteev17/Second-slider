const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
   slide.addEventListener('click',() => {

    removeAcliveClass()
    slide.classList.add('active')

   }) 
}
function  removeAcliveClass(){
    slides.forEach((slide) =>{
        slide.classList.remove('active')
    })
}