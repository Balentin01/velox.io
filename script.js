var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: { delay: 1000, disableOnInteraction: false },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    effect: 'fade',
    fadeEffect: { crossFade: true },
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");
    const menuLinks = document.querySelectorAll(".mobile-menu ul li a"); // Seleccionamos los enlaces

    // Función para abrir el menú
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active"); // Alterna entre mostrar y ocultar
    });

    // Función para cerrar el menú al hacer clic en "X"
    closeMenu.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

    // Cerrar el menú al hacer clic en cualquier enlace dentro de él
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            mobileMenu.classList.remove("active");
        }
    });

    // Asegurarse de que el menú principal sea manejado también
    const mainMenu = document.querySelector('.main-menu');
    
    // Alternar la clase 'active' para el menú principal
    menuToggle.addEventListener('click', () => {
        mainMenu.classList.toggle('active');
    });
});

function adjustIcons() {
    let screenWidth = window.innerWidth;
    
    document.querySelectorAll(".hide-on-mobile").forEach(el => {
        if (screenWidth <= 768) {
            el.style.display = "none";
        } else {
            el.style.display = "inline";
        }
    });
}

// Ejecutar al cargar la página y al redimensionar
window.addEventListener("load", adjustIcons);
window.addEventListener("resize", adjustIcons);

// Selecciona los elementos del menú
const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');

// Al hacer clic en el botón hamburguesa, muestra el menú
menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
});


//session bicicletas
// Array para almacenar productos en el carrito
let carrito = [];

// Obtener el contador del carrito
const cartCount = document.getElementById('cart-count');

// Función para agregar productos al carrito y actualizar el contador
function agregarAlCarrito(producto) {
    carrito.push(producto);  // Añadir el producto al carrito
    // Actualizar el contador de productos en el carrito
    updateCartCount();
    alert(`${producto} ha sido añadido al carrito.`);
}

// Función para incrementar el contador
function updateCartCount() {
    // Actualizar el contador con la cantidad de productos en el carrito
    cartCount.textContent = carrito.length;
}

// Obtener todos los botones "Añadir al carrito"
const botones = document.querySelectorAll('.add-to-cart');

// Asignar el evento 'click' a todos los botones de "Añadir al carrito"
botones.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        // Obtener el nombre del producto usando el índice del botón
        const nombreProducto = document.querySelectorAll('.product-card h3')[index].textContent;
        agregarAlCarrito(nombreProducto);  // Añadir el producto al carrito
    });
});

//chatbot
function toggleChat() {
    let chatWindow = document.querySelector(".chat-window");
    chatWindow.style.display = chatWindow.style.display === "block" ? "none" : "block";
}

function sendMessage() {
    let userInput = document.getElementById("user-input");
    let chatBody = document.getElementById("chat-body");

    if (userInput.value.trim() !== "") {
        // Crear mensaje del usuario
        let userMessage = document.createElement("p");
        userMessage.classList.add("user-message");
        userMessage.textContent = userInput.value;
        chatBody.appendChild(userMessage);

        // Simular respuesta del bot
        setTimeout(() => {
            let botMessage = document.createElement("p");
            botMessage.classList.add("bot-message");
            botMessage.textContent = "Gracias por tu mensaje, en breve te responderemos. 😊";
            chatBody.appendChild(botMessage);

            // Hacer scroll hacia abajo
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);

        // Limpiar input
        userInput.value = "";
    }
}
function initMap() {
    var geocoder = new google.maps.Geocoder();
    var address = "C. 19 de Marzo 145, Santo Domingo"; // Dirección exacta

    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16, // Nivel de zoom
      center: { lat: 18.4861, lng: -69.9312 }, // Centro inicial (Santo Domingo)
    });

    // Convertir dirección a coordenadas
    geocoder.geocode({ address: address }, function (results, status) {
      if (status === "OK") {
        map.setCenter(results[0].geometry.location);

        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: "VeloX - Ubicación",
        });
      } else {
        console.error("Geocode falló: " + status);
      }
    });
  }

//anuncio
function cerrarAnuncio() {
    document.querySelector(".ad-container").style.display = "none";
}

//formulario
function mostrarLogin() {
    document.getElementById("login").classList.remove("formulario_oculto");
    document.getElementById("registro").classList.add("formulario_oculto");
    
    document.getElementById("loginTab").classList.add("active");
    document.getElementById("registroTab").classList.remove("active");
}

function mostrarRegistro() {
    document.getElementById("login").classList.add("formulario_oculto");
    document.getElementById("registro").classList.remove("formulario_oculto");

    document.getElementById("loginTab").classList.remove("active");
    document.getElementById("registroTab").classList.add("active");
}

function mostrarInicio() {
    alert("¡Ha iniciado Sesion!");
}
function mostrar_Registro() {
    alert("¡Se ha registrado!");
}

const checkbox = document.getElementById("dark-mode-toggle");
const body = document.body;

// Verificar si el usuario ya activó el modo oscuro antes
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    checkbox.checked = true; // Mantener el check marcado
}

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
    } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
    }
});

//secret egg
document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "v") { // Si presiona la tecla "R"
        const secretMessage = document.createElement("div");
        secretMessage.innerHTML = "🔥 Felicidades, Acabas de obtener un 50% 🔥";
        secretMessage.style.position = "fixed";
        secretMessage.style.bottom = "20px";
        secretMessage.style.right = "20px";
        secretMessage.style.background = "black";
        secretMessage.style.color = "white";
        secretMessage.style.padding = "10px";
        secretMessage.style.borderRadius = "5px";
        secretMessage.style.boxShadow = "0 0 10px rgba(255,255,255,0.5)";
        secretMessage.style.zIndex = "1000";

        document.body.appendChild(secretMessage);

        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            secretMessage.remove();
        }, 5000);
    }
});