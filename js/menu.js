const burger = document.querySelector('.burguer');
const menu = document.querySelector('.menu-nav');
/*console.log(burger);
console.log(menu);*/
burger.addEventListener('click',()=>{
    menu.classList.toggle("spread")
})

/*e = evento en el dom, osea que so ponemos el console.log(e) nos muestra a lo que le damos click,  */
// esta funcion hace que si le damos click a cualquier cosa del dom diferente de el menu y el icono del menu no lo despliega pero si damos click dentro de el menu se despliega
window.addEventListener('click', e=>{
    if (menu.classList.contains('spread') && e.target != menu && e.target != burger){
        menu.classList.toggle("spread")/*pone la clase spread en el div del menu para q se despliegue*/
    }
})