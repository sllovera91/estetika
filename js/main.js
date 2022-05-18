// TOP HEADER

document.getElementById("superior").innerHTML = `
<ul class="top">
    <li><i class="fas fa-mobile-alt"></i><a href="tel:+1163372118">Tel: 11-6337-2118</a></li>
    <li><i class='fab fa-whatsapp'></i><a href="https://wa.me/+541163372118?text=Hola!%20Queria%20averiguar%20acerca%20de%20los%20tratamientos" target="_blank">Contactanos</a></li>
 </ul>
`

// NAVBAR HEADER

document.getElementById("arriba").innerHTML = `
<div class="header-logo">
            <img src="img/logo1.png" alt="Estetika Urbana">
        </div>
        <nav class="navbar">

            <ul class="nav-menu">
                <li class="nav-item"><a href="index.html">INICIO</a></li>
                <li class="nav-item"><a href="tratamientos.html">TRATAMIENTOS</a></li>
                <li class="nav-item"><a href="ubicacion.html">UBICACION</a></li>
                <li class="nav-item"><a href="consulta.html">CONSULTANOS</a></li>
            </ul>

            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>   
            </div>
        </nav>
`

// FOOTER

document.getElementById("pie").innerHTML = `
<a href="mailto:liliana.nunez2002@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i></a>
<a href="http://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
<a href="https://wa.me/+541163372118?text=Hola!%20Queria%20averiguar%20acerca%20de%20los%20tratamientos" target="_blank"><i class='fab fa-whatsapp'></i></a>

<p> Palermo | Caballito | CABA </p>
<p> Todos los derechos Reservados - 2022</p>
`;

// MENU RESPONSIVE

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});



