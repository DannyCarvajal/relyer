let englishButton = document.getElementsByClassName("english");
let spanishButton = document.getElementsByClassName("spanish");
let homeText = document.getElementsByClassName("translate");
let langtitle = document.getElementsByClassName("changelang__title")[0];
let flag = document.getElementsByClassName("bandera")[0];
let button = document.getElementsByClassName("play-button-video--responsive")[0];

// REMEMBER LANGUAGE CHANGING PAGE
if (localStorage.getItem("language")) {
	currentLanguage = localStorage.getItem("language");
	console.log(currentLanguage);

	if (currentLanguage === "en") {
		englishButton[0].click();
	} else {
		spanishButton[0].click();
	}
} else {
	englishButton[0].click();
}

Array.from(homeText).forEach(element => {
	console.log(element.innerText);
});

// PAGE CONTENT IN DESIRED LANGUAGES
const homeContent = {
	spanish: [
		"Inicio",
		"Servicios",
		"Expertos",
		"Test diagnóstico",
		"Aprende",
		"Nosotros",
		"Conócenos",
		"Contacto",
		"Inicia sesión",
		"Inicia sesión",
		"Inglés",
		"Inglés",
		"Español",
		"Relyer",
		"Somos una plataforma que permite</br> a las mipymes yluego de realizar un</br> diagnóstico  digital, conectarse con </br>  proveedores y aliados expertos que </br> harán crecer sus negocios.",
		'Conoce tu <span class="techlevelspan"> nivel tecnológico </span> ',
		"Nuestras soluciones",
		"La tecnología y la innovación son nuestras principales cartas",
		"diagnóstico",
		"Tecnología",
		"Recursos",
		"Expertos",
		"¿Cómo <span>funciona?</span>",
		"Identifica",
		"Puedes encontrar posibles <br> falencias por tu cuenta <br> o usar nuestro diagnóstico  ",
		"<br> Aprende",
		"Descubre como las herramientas <br> tecnológicas y diferentes metologías <br> pueden llevarte al siguiente nivel <br> de la mano de expertos",
		"Aplica",
		"Usa los conceptos <br> aprendidos para expandir <br> tu empresa/negocio",
		"No importa si se te dificultan <br> las nuevas tecnologías o el ambiente digital o si tienes previa <br> experiencia en ellas",

		"Empresas que confían en nosotros",
		"Conoce el <span>nivel tecnológico </span> de tu empresa",
		"Inicio",
		"Servicio",
		"Aprende más",
		"Nosotros",
	],
	english: [
		"Home",
		"Services",
		"Experts & Tools",
		"Diagnosis Test",
		"Learn more",
		"About us",
		"know us",
		"Contact",
		"Login/Register",
		"Login/Register",
		"English",
		"English",
		"Spanish",
		"Relyer",
		"Our platform helps MSMEs identify<br> their tech needs, connecting<br> with suppliers & experts<br> that will boost your company",
		// "Play video",
		'Know the <span class="techlevelspan"> tech level</span> <br> of your company',
		"Our solutions",
		"Tech and innovation are our right hand",
		"Diagnosis",
		"Tech",
		"Resources",
		"Experts",
		"How does it <span>work?</span>",
		"Identify",
		"Recognize your needs with our diagnosis in areas such as marketing, costumer service, management,and more",
		"Learn",
		"We provide useful content,suggest tools for you and connect you with experts that fit your needs and expectations",
		"Apply",
		" You can have 1:1 meetings with multidisciplinary experts that will answer your questions and boost your company",
		"It doesn’t matter whether you’re struggling with managing devices and tech, or if you already have more experience",
		"Know the <span>tech level</span> of your company",
		"Home",
		"Services",
		"More",
		"About us",
	],
};

Array.from(spanishButton).forEach(element => {
	element.addEventListener("click", () => {
		flag.src = "./assets/home/es-flag.svg";
		for (let i = 0; i < homeText.length; i++) {
			homeText[i].innerHTML = homeContent.spanish[i];
		}
		flag.alt = "Bandera española";
		langtitle.innerHTML = "Español";
		element.classList.add("selected");
		englishButton[1].classList.remove("selected");
		englishButton[1].innerHTML = "Inglés";
		element.innerHTML = "Español";
		localStorage.setItem("language", "es");
	});
});

Array.from(englishButton).forEach(element => {
	element.addEventListener("click", () => {
		for (let i = 0; i < homeText.length; i++) {
			homeText[i].innerHTML = homeContent.english[i];
		}
		flag.src = "./assets/home/en-flag.svg";
		flag.alt = "English Flag";
		langtitle.innerHTML = "English";
		element.classList.add("selected");
		spanishButton[1].classList.remove("selected");
		element.innerHTML = "English";
		spanishButton[1].innerHTML = "Spanish";
		localStorage.setItem("language", "en");
	});
});
