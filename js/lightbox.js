const img = document.querySelectorAll('.img-portfolio');
const addLight = document.querySelector('.add-img');
const contLight = document.querySelector('.img-light');
const burger1 = document.querySelector('.burguer');
console.log(img);
console.log(addLight);
console.log(contLight);

/*recorre portafolio y llama la funcion mostrar imagen para mostrar la imagen clickeada del portafolio en el lightbox*/
img.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        showImg(imagen.getAttribute('src'))
    })
})

/*condicion que cierra la imagen lightbox que se clickea del portafolio*/
contLight.addEventListener('click', (e)=>{
    if (e.target !== addLight){
        contLight.classList.toggle('show')
        addLight.classList.toggle('show-image')
        burger1.style.opacity = '1'; /*cuando cierra el lihgtbox, entonces el icono burger se muestra de nuevo*/
    }
})

/*muestra la imagen lightbox que se clickea del portafolio*/
const showImg = (imagen)=>{
    addLight.src = imagen
    contLight.classList.toggle('show')
    addLight.classList.toggle('show-image')
    burger1.style.opacity = '0';/*cuando se abre el lihgtbox, entonces el icono burger desaparece*/
}