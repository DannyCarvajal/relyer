let englishButton = document.getElementsByClassName("english");
let spanishButton = document.getElementsByClassName("spanish");
let homeText = document.getElementsByClassName("translate");
let langtitle = document.getElementsByClassName("changelang__title")[0];
let flag = document.getElementsByClassName("bandera")[0];
let foot = document.getElementsByClassName("foot");

// REMEMBER LANGUAGE CHANGING PAGE
if (localStorage.getItem("language")) {
	currentLanguage = localStorage.getItem("language");
	console.log(currentLanguage);

	if (currentLanguage === "en") {
		englishButton[1].click();
	} else {
		spanishButton[1].click();
	}
} else {
	englishButton[1].click();
}

Array.from(homeText).forEach(element => {
	console.log(element.innerText);
});

// PAGE CONTENT IN DESIRED LANGUAGES
const knowUsContent = {
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
		"Inicio",
		"Expertos",
		"Test diagnóstico",
		"Ingles",
		"DESCUBRE",
		"RELYER",
		"¿Quiénes somos?",
		'Somos Relyer y a través de nuestra plataforma puedes acceder a recursos y formación de la mano de expertos que te permitirán facilitar y fortalecer el manejo del desarrollo de tu empresa .Nuestros pilares abordan todas las etapas del proceso de transformación </span><br> Haz crecer tu empresa, sus colaboradores y su futuro a través de la <span style="font-weight: bold;">transformación digital y cognitiva</span>',
		"Profesionales",
		"Sugerencias <br> tecnológicas",
		"artículos",
		"Descubre",
		'Nuestro <span style="font-weight: bold;">ADN</span>',
		"Porqué Relyer?",
		"Valoramos a las personas como individuos y a la familia",
		"Trabajamos en equipo con nuestros clientes de manera transparente",
		"Somos generadores de ideas y soluciones",
		"Equipo",
		"Scrum Master",
		"´Diseñador UI/UX",
		"Product Owner",
		"Desarrollador backend",
		"Desarrollador Frontend",
		"Nuestras habilidades",
		"Sostenibilidad",
		"Adaptación",
		"Crecimiento",
		"Lo que dicen nuestros clientes ",
		"Ustedes son increibles, no puedo creer todo el apoyo que he recibido y el crecimiento , gracias",
		" Realmente estoy agradecida por el impacto tan positivo que han tenido en mi negocio y por la orientación que me han dado 10/10",
		"Aumente mis ventas 3 veces en solo un par de meses, gracias Relyer",
		"Al principio tenía mis dudas como cualquier persona, pero rapidamente supe que había sido una buena desición",
		"Muy buen servicio, una experiencia muy linda",
		"Lo que dicen nuestros clientes ",
		"Ustedes son increibles, no puedo creer todo el apoyo que he recibido y el crecimiento , gracias",
		" Realmente estoy agradecida por el impacto tan positivo que han tenido en mi negocio y por la orientación que me han dado 10/10",
		"Aumente mis ventas 3 veces en solo un par de meses, gracias Relyer",
		"Al principio tenía mis dudas como cualquier persona, pero rapidamente supe que había sido una buena desición",
		"Muy buen servicio, una experiencia muy linda",
	],
	english: [
		"Home",
		"Services",
		"Experts",
		"Test ",
		"Learn",
		"About us",
		"Know us",
		"Contact",
		"Log in",
		"Home",
		"Experts",
		"Test ",
		"English",
		"DISCOVER",
		"RELYER",
		"Who are we?",
		'We are Relyer and with our platform you can access to many resources, and grow your company always adviced by experts.  We are part of all the processes of the digital transformation  </span><br> Grow your company, and buld the future with the hand of the <span style="font-weight: bold;">digital transformation</span> ',
		"Professionals",
		"Tech suggestions",
		"Articles",
		"Discover",
		'Our <span style="font-weight: bold;">ADN</span>',
		"Why Relyer?",
		"We appreciate people as human beings and family ",
		"We work with our clients with open processes",
		"We are generators of solutions and ideas",
		"TEAM",
		"Scrum Master",
		"UI/UX designer",
		"Product Owner",
		"Backend developer",
		"Frontend developer ",
		"OUR SKILLS",
		"Sustainability",
		"Adaptation",
		"Growth",
		"What our clients say",
		"",
		"",
		'"You guys are amazing, my company went somewhere I didnt believe possible with all the feedback and tools, thank you so much, worth every penny"',
		'"Im spechless for all the things I learnt and the way my entrepreneur ideas went high, thank you so much, relyer forever"',
		'" I sincerely can say that it was really great, you might think is just a common test, but is somethigng really brand new, and you have the best guidance in what you need"',
		'" I mean like just can say 2 words , thank you"',
		'" When you give your best and youre guided by the best success is a joke to you"',
	],
};

Array.from(spanishButton).forEach(element => {
	element.addEventListener("click", () => {
		flag.src = "../assets/home/es-flag.svg";

		for (let i = 0; i < homeText.length; i++) {
			homeText[i].innerHTML = knowUsContent.spanish[i];
		}
		foot[0].innerHTML = "Inicio";
		foot[1].innerHTML = "Servicios";
		foot[2].innerHTML = "Aprende mas";
		foot[3].innerHTML = "Sobre nosotros";
		foot[4].innerHTML = "Inicio";
		foot[5].innerHTML = "Servicios";
		foot[6].innerHTML = "Aprende mas";

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
			homeText[i].innerHTML = knowUsContent.english[i];
		}

		foot[0].innerHTML = "Home";
		foot[1].innerHTML = "Services";
		foot[2].innerHTML = "Learn more";
		foot[3].innerHTML = "About us";
		foot[4].innerHTML = "Home";
		foot[5].innerHTML = "Services";
		foot[6].innerHTML = "Learn more";

		flag.src = "../assets/home/en-flag.svg";
		flag.alt = "English Flag";
		langtitle.innerHTML = "English";
		element.classList.add("selected");
		spanishButton[1].classList.remove("selected");
		element.innerHTML = "English";
		spanishButton[1].innerHTML = "Spanish";
		localStorage.setItem("language", "en");
	});
});
