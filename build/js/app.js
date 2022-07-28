document.addEventListener('DOMContentLoaded', function() {

    eventListeners();
    darkMode();
});

function darkMode() {

    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    // console.log(prefiereDarkMode.matches);

    if(prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    prefiereDarkMode.addEventListener('change', function() {
        if(prefiereDarkMode.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    const botonDarkMode = document.querySelector('.dark-mode-boton');
    botonDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
}

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResponsive);

    const metodoContacto = document.querySelectorAll('input[name="contacto[contacto]"]');
    metodoContacto.forEach(input => input.addEventListener('click', seleccionarMetodo));
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');

    navegacion.classList.toggle('mostrar')
}

// function seleccionarMetodo(e) {
    
//     if(e.target.value === 'telefono') {
//         contactoDiv.innerHTML = `
//             <label for="telefono">Teléfono</label>
//             <input type="tel" placeholder="Tu Teléfono" id="telefono"  name="contacto[telefono]" required>

//             <label for="fecha">Fecha Llamada:</label>
//             <input type="date" id="fecha"  name="contacto[fecha]" required>

//             <label for="hora">Hora Llamada:</label>
//             <input type="time" id="hora" min="09:00" max="18:00"  name="contacto[hora]" required>

//         `;
//     } else {
//         contactoDiv.innerHTML = `
//             <label for="email">E-mail</label>
//             <input type="email" placeholder="Tu Email" id="email" name="contacto[email]" required>
//         `;
//     }
   
//     let nombreDeUsuario = prompt("Ingrese su nombre de usuario");

//     if ( nombreDeUsuario == "" ) {
//         alert("No ingresaste el nombre de usuario")
//     } else {
//         alert("Nombre de usuario ingresado: " + nombreDeUsuario)
//     }
    
//     let userEmail = prompt("Ingrese su correo electrónico");
    
//     let confirmUserEmail = prompt("Confirme su correo electrónico");
    
//     while ( userEmail != "" && confirmUserEmail != "") 
    
//     {if (userEmail == confirmUserEmail) {
        
//         alert("El correo a sido guardado con éxito!");break;} 
//         else {
           
//             alert("Los correos deben de ser iguales");
       
//              userEmail = prompt("Ingrese su correo electrónico");
        
//              confirmUserEmail = prompt("Confirme su correo electrónico");}
//     }

   
// }
let formContact = document.getElementById("form-contact");

formContact.addEventListener("submit", (e) =>{

    e.preventDefault();
    console.dir(e.target.children);

// guardamos los valores de los imputs

    let nombre = e.target.children[0].value;
    let telefono = e.target.children[1].value;
    let email = e.target.children[2].value;
    let mensaje = e.target.children[3].value;

    // se valida que no este vacios 
    if (nombre == "" && telefono== "" && email == "" && mensaje== ""){
        alert("no estan los datos completos")
    } else{
        document.body.innerHTML += `<h2> los datos $
        (nombre), $(telefono), $(email) y $(mensaje), se enviaron correctamente </h2>`
    }
})

 const Enviar = document.getElementById('mensaje')

    function MESAJE_UNO() {
        alert('mensaje enviado')
    }