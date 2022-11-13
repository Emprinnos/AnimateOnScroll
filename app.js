

/* El Observer*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('mostrar');
        } else {
            entry.target.classList.remove('mostrar');
        }
        
    });
});
/* Variable para acceder las secciones con la clase "hidden" */

const seccionesOcultas = document.querySelectorAll('.hidden');

seccionesOcultas.forEach((elemento)=>observer.observe(elemento));