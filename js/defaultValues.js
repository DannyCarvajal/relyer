const defaultQuestions = `
{
    "questions": [
        {
            "question": "Número de empleados",
            "type": "0",
            "uid": "61048ec04868ce31c8555944"
        },
        {
            "question": "¿A que industria pertenece tu negocio?",
            "type": "0",
            "uid": "61048ed54868ce31c8555947"
        },
        {
            "question": "¿Conoces las herramientas disponibles para digitalizar tu negocio?",
            "type": "0",
            "uid": "61048edd4868ce31c8555949"
        },
        {
            "question": "¿Qué importancia tienen los datos en la estrategia y forma de hacer negocio de su comercio?",
            "type": "0",
            "uid": "61048ee54868ce31c855594b"
        },
        {
            "question": "¿Cuáles de estos canales digitales empleas en tu negocio?",
            "type": "2",
            "uid": "61048f344868ce31c855594d"
        },
        {
            "question": "¿Utilizas estos canales digitales para la promoción de tu negocio?",
            "type": "1",
            "uid": "61048f404868ce31c855594f"
        },
        {
            "question": "¿Utilizas estos canales digitales para relacionarte con tus clientes?",
            "type": "1",
            "uid": "61048f504868ce31c8555951"
        },
        {
            "question": "¿Utilizas estos canales digitales para vender tus productos y/o servicios?",
            "type": "1",
            "uid": "61048f624868ce31c8555953"
        },
        {
            "question": "¿Cuáles de las siguientes herramientas dispones en tu negocio para la comunicación y colaboración con tus clientes?",
            "type": "2",
            "uid": "61048f6a4868ce31c8555955"
        },
        {
            "question": "¿Consideras adecuado el nivel de conocimientos digitales del personal de tu negocio?",
            "type": "0",
            "uid": "61048f754868ce31c8555957"
        },
        {
            "question": "¿Qué medios de pago se emplean en tu negocio?",
            "type": "1",
            "uid": "61048f844868ce31c8555959"
        },
        {
            "question": "Que acciones se practican en tu negocio, para hacer domicilios",
            "type": "1",
            "uid": "61048f914868ce31c855595b"
        },
        {
            "question": "¿Qué tipo de dispositivos y recursos se utilizan en tu negocio?",
            "type": "2",
            "uid": "61048fa14868ce31c855595d"
        },
        {
            "question": "¿Cuál de las siguientes herramientas digitales son utilizadas para la gestión de tu negocio?",
            "type": "1",
            "uid": "61048fac4868ce31c855595f"
        },
        {
            "question": "¿Cuáles herramientas para la comunicación y colaboración con tus proveedores y otros agentes del entorno?",
            "type": "2",
            "uid": "61048fb94868ce31c8555961"
        }
    ]
}`;

const defaultAnswers = `{
    "answers": [
        {
            "answer": "< 10",
            "value": "N/A",
            "questionId": "61048ec04868ce31c8555944",
            "uid": "610492404868ce31c8555973"
        },
        {
            "answer": "11-49",
            "value": "N/A",
            "questionId": "61048ec04868ce31c8555944",
            "uid": "610492454868ce31c8555975"
        },
        {
            "answer": "> 50",
            "value": "N/A",
            "questionId": "61048ec04868ce31c8555944",
            "uid": "6104924a4868ce31c8555977"
        },
        {
            "answer": "Alimentación (Restaurantes, cafeterías, frutería, heladería)",
            "value": "N/A",
            "questionId": "61048ed54868ce31c8555947",
            "uid": "610492754868ce31c855597c"
        },
        {
            "answer": "Artesanías/ miscelanea",
            "value": "N/A",
            "questionId": "61048ed54868ce31c8555947",
            "uid": "6104927d4868ce31c855597e"
        },
        {
            "answer": "Belleza y Cosmética",
            "value": "N/A",
            "questionId": "61048ed54868ce31c8555947",
            "uid": "610492814868ce31c8555980"
        },
        {
            "answer": "Comercio Viveres",
            "value": "N/A",
            "questionId": "61048ed54868ce31c8555947",
            "uid": "610492884868ce31c8555982"
        },
        {
            "answer": "Comercio Moda",
            "value": "N/A",
            "questionId": "61048ed54868ce31c8555947",
            "uid": "6104928d4868ce31c8555984"
        },
        {
            "answer": "Cultural",
            "value": "N/A",
            "questionId": "61048ed54868ce31c8555947",
            "uid": "610492924868ce31c8555986"
        },
        {
            "answer": "Educación",
            "value": "N/A",
            "questionId": "61048ed54868ce31c8555947",
            "uid": "610492984868ce31c8555988"
        },
        {
            "answer": "Manufactura",
            "value": "N/A",
            "questionId": "61048ed54868ce31c8555947",
            "uid": "6104929c4868ce31c855598a"
        },
        {
            "answer": "Servicios",
            "value": "N/A",
            "questionId": "61048ed54868ce31c8555947",
            "uid": "610492a14868ce31c855598c"
        },
        {
            "answer": "Salud",
            "value": "N/A",
            "questionId": "61048ed54868ce31c8555947",
            "uid": "610492a54868ce31c855598e"
        },
        {
            "answer": "Servicios Profesionales /Asesorías",
            "value": "N/A",
            "questionId": "61048ed54868ce31c8555947",
            "uid": "610492aa4868ce31c8555990"
        },
        {
            "answer": "Entretenimiento",
            "value": "N/A",
            "questionId": "61048ed54868ce31c8555947",
            "uid": "610492ae4868ce31c8555992"
        },
        {
            "answer": "Ferretería",
            "value": "N/A",
            "questionId": "61048ed54868ce31c8555947",
            "uid": "610492b34868ce31c8555994"
        },
        {
            "answer": "Otros (Especifique)",
            "value": "N/A",
            "questionId": "61048ed54868ce31c8555947",
            "uid": "610492c14868ce31c8555996"
        },
        {
            "answer": "Desconozco qué herramientas puedo utilizar",
            "value": "0",
            "questionId": "61048edd4868ce31c8555949",
            "uid": "610492dc4868ce31c8555998"
        },
        {
            "answer": "Tengo una idea al respecto, pero no me he informado",
            "value": "50",
            "questionId": "61048edd4868ce31c8555949",
            "uid": "610492e44868ce31c855599a"
        },
        {
            "answer": "Conozco las herramientas que se utilizan en mi sector",
            "value": "75",
            "questionId": "61048edd4868ce31c8555949",
            "uid": "610492ed4868ce31c855599c"
        },
        {
            "answer": "Estoy al tanto de las nuevas tendencias que podrían afectar a mi negocio",
            "value": "100",
            "questionId": "61048edd4868ce31c8555949",
            "uid": "610492f84868ce31c855599e"
        },
        {
            "answer": "Desconozco el valor que los datos pueden aportar a mi negocio",
            "value": "0",
            "questionId": "61048ee54868ce31c855594b",
            "uid": "6104930e4868ce31c85559a0"
        },
        {
            "answer": "Considero que puede aportar gran valor, pero desconozco la forma en que puedo recogerlos y sacarle provecho para mi negocio",
            "value": "25",
            "questionId": "61048ee54868ce31c855594b",
            "uid": "610493184868ce31c85559a2"
        },
        {
            "answer": "Tenemos planteados algunos procesos para su recogida y almacenamiento",
            "value": "50",
            "questionId": "61048ee54868ce31c855594b",
            "uid": "610493204868ce31c85559a4"
        },
        {
            "answer": "Hacemos un tratamiento y explotación de los datos que recogemos, con importancia en las decisiones del negocio",
            "value": "75",
            "questionId": "61048ee54868ce31c855594b",
            "uid": "610493274868ce31c85559a6"
        },
        {
            "answer": "Tenemos una estrategia integral de gestión y tratamiento del dato, de gran relevancia en la toma de decisiones de la empresa",
            "value": "100",
            "questionId": "61048ee54868ce31c855594b",
            "uid": "6104932f4868ce31c85559a8"
        },
        {
            "answer": "Ninguno",
            "value": "0",
            "questionId": "61048f344868ce31c855594d",
            "uid": "610493414868ce31c85559aa"
        },
        {
            "answer": "Página web",
            "value": "15",
            "questionId": "61048f344868ce31c855594d",
            "uid": "6104934c4868ce31c85559ac"
        },
        {
            "answer": "Aplicación móvil",
            "value": "15",
            "questionId": "61048f344868ce31c855594d",
            "uid": "610493514868ce31c85559ae"
        },
        {
            "answer": "Redes Sociales",
            "value": "15",
            "questionId": "61048f344868ce31c855594d",
            "uid": "610493574868ce31c85559b0"
        },
        {
            "answer": "Blog",
            "value": "15",
            "questionId": "61048f344868ce31c855594d",
            "uid": "6104935c4868ce31c85559b2"
        },
        {
            "answer": "Plataformas intermedias",
            "value": "15",
            "questionId": "61048f344868ce31c855594d",
            "uid": "6104937b4868ce31c85559b5"
        },
        {
            "answer": "Otros",
            "value": "15",
            "questionId": "61048f344868ce31c855594d",
            "uid": "610493864868ce31c85559b7"
        },
        {
            "answer": "No",
            "value": "0",
            "questionId": "61048f404868ce31c855594f",
            "uid": "6104939d4868ce31c85559b9"
        },
        {
            "answer": "Ofrezco información básica de mi negocio",
            "value": "25",
            "questionId": "61048f404868ce31c855594f",
            "uid": "610493a44868ce31c85559bb"
        },
        {
            "answer": "Llevo a cabo campañas de publicidad",
            "value": "25",
            "questionId": "61048f404868ce31c855594f",
            "uid": "610493a94868ce31c85559bd"
        },
        {
            "answer": "Publico eventos y noticias de interés sobre mi negocio",
            "value": "25",
            "questionId": "61048f404868ce31c855594f",
            "uid": "610493ae4868ce31c85559bf"
        },
        {
            "answer": "Me comunico con los clientes",
            "value": "25",
            "questionId": "61048f404868ce31c855594f",
            "uid": "610493b34868ce31c85559c1"
        },
        {
            "answer": "No",
            "value": "0",
            "questionId": "61048f504868ce31c8555951",
            "uid": "610493c44868ce31c85559c3"
        },
        {
            "answer": "Recojo y analizo datos de las características generales de los clientes",
            "value": "25",
            "questionId": "61048f504868ce31c8555951",
            "uid": "610493c94868ce31c85559c5"
        },
        {
            "answer": "Analizo el comportamiento y opiniones de los clientes para mejorar su experiencia",
            "value": "25",
            "questionId": "61048f504868ce31c8555951",
            "uid": "610493cd4868ce31c85559c7"
        },
        {
            "answer": "Ofrezco servicios post venta y atención a los clientes",
            "value": "25",
            "questionId": "61048f504868ce31c8555951",
            "uid": "610493d34868ce31c85559c9"
        },
        {
            "answer": "Involucro a los clientes en el diseño de productos y/o servicios",
            "value": "25",
            "questionId": "61048f504868ce31c8555951",
            "uid": "610493d84868ce31c85559cb"
        },
        {
            "answer": "No",
            "value": "0",
            "questionId": "61048f624868ce31c8555953",
            "uid": "610493ee4868ce31c85559cd"
        },
        {
            "answer": "Presento el catálogo de productos y/o servicios",
            "value": "25",
            "questionId": "61048f624868ce31c8555953",
            "uid": "610493f54868ce31c85559cf"
        },
        {
            "answer": "Permito realizar pedidos y/o reservas online",
            "value": "25",
            "questionId": "61048f624868ce31c8555953",
            "uid": "610493f94868ce31c85559d1"
        },
        {
            "answer": "Permito realizar el pago online",
            "value": "25",
            "questionId": "61048f624868ce31c8555953",
            "uid": "610493fd4868ce31c85559d3"
        },
        {
            "answer": "Permito realizar el seguimiento del estado de los pedidos",
            "value": "25",
            "questionId": "61048f624868ce31c8555953",
            "uid": "610494014868ce31c85559d5"
        },
        {
            "answer": "Ninguna",
            "value": "0",
            "questionId": "61048f6a4868ce31c8555955",
            "uid": "610494144868ce31c85559d7"
        },
        {
            "answer": "Correo electrónico",
            "value": "15",
            "questionId": "61048f6a4868ce31c8555955",
            "uid": "6104941d4868ce31c85559d9"
        },
        {
            "answer": "Mensajería instantánea",
            "value": "15",
            "questionId": "61048f6a4868ce31c8555955",
            "uid": "610494234868ce31c85559db"
        },
        {
            "answer": "Servidores en la nube",
            "value": "15",
            "questionId": "61048f6a4868ce31c8555955",
            "uid": "610494274868ce31c85559dd"
        },
        {
            "answer": "Servidores compartidos",
            "value": "15",
            "questionId": "61048f6a4868ce31c8555955",
            "uid": "6104942b4868ce31c85559df"
        },
        {
            "answer": "Vídeo conferencia",
            "value": "15",
            "questionId": "61048f6a4868ce31c8555955",
            "uid": "610494304868ce31c85559e1"
        },
        {
            "answer": "Otros",
            "value": "15",
            "questionId": "61048f6a4868ce31c8555955",
            "uid": "610494574868ce31c85559e3"
        },
        {
            "answer": "Lo desconozco (NS/NC)",
            "value": "25",
            "questionId": "61048f754868ce31c8555957",
            "uid": "6104946f4868ce31c85559e5"
        },
        {
            "answer": "No",
            "value": "50",
            "questionId": "61048f754868ce31c8555957",
            "uid": "610494754868ce31c85559e7"
        },
        {
            "answer": "Sí, aunque es básico",
            "value": "75",
            "questionId": "61048f754868ce31c8555957",
            "uid": "6104947a4868ce31c85559e9"
        },
        {
            "answer": "Sí, es muy adecuado",
            "value": "100",
            "questionId": "61048f754868ce31c8555957",
            "uid": "610494824868ce31c85559eb"
        },
        {
            "answer": "Ninguno",
            "value": "0",
            "questionId": "61048f844868ce31c8555959",
            "uid": "6104948f4868ce31c85559ed"
        },
        {
            "answer": "Efectivo",
            "value": "15",
            "questionId": "61048f844868ce31c8555959",
            "uid": "610494954868ce31c85559ef"
        },
        {
            "answer": "Pago móvil",
            "value": "15",
            "questionId": "61048f844868ce31c8555959",
            "uid": "610494984868ce31c85559f1"
        },
        {
            "answer": "Datafono",
            "value": "15",
            "questionId": "61048f844868ce31c8555959",
            "uid": "6104949c4868ce31c85559f3"
        },
        {
            "answer": "Transferencia / Domiciliación",
            "value": "15",
            "questionId": "61048f844868ce31c8555959",
            "uid": "610494a04868ce31c85559f5"
        },
        {
            "answer": "PayPal",
            "value": "15",
            "questionId": "61048f844868ce31c8555959",
            "uid": "610494a54868ce31c85559f7"
        },
        {
            "answer": "Pasarela de pago",
            "value": "15",
            "questionId": "61048f844868ce31c8555959",
            "uid": "610494a94868ce31c85559f9"
        },
        {
            "answer": "N/A (no hacemos domicilios)",
            "value": "0",
            "questionId": "61048f914868ce31c855595b",
            "uid": "610494c04868ce31c85559fb"
        },
        {
            "answer": "Venta en tiendas de terceros (marketplaces, etc.)",
            "value": "25",
            "questionId": "61048f914868ce31c855595b",
            "uid": "610494c74868ce31c85559fd"
        },
        {
            "answer": "Envío a domicilio mensajero empleado",
            "value": "25",
            "questionId": "61048f914868ce31c855595b",
            "uid": "610494ce4868ce31c85559ff"
        },
        {
            "answer": "Envío a domicilio plataformas",
            "value": "25",
            "questionId": "61048f914868ce31c855595b",
            "uid": "610494d34868ce31c8555a01"
        },
        {
            "answer": "Ninguno",
            "value": "0",
            "questionId": "61048fa14868ce31c855595d",
            "uid": "610494e74868ce31c8555a03"
        },
        {
            "answer": "Móvil",
            "value": "20",
            "questionId": "61048fa14868ce31c855595d",
            "uid": "610494ed4868ce31c8555a05"
        },
        {
            "answer": "Tablet",
            "value": "20",
            "questionId": "61048fa14868ce31c855595d",
            "uid": "610494f04868ce31c8555a07"
        },
        {
            "answer": "Ordenador de sobremesa",
            "value": "20",
            "questionId": "61048fa14868ce31c855595d",
            "uid": "610494f44868ce31c8555a09"
        },
        {
            "answer": "Ordenador portátil",
            "value": "20",
            "questionId": "61048fa14868ce31c855595d",
            "uid": "610494f84868ce31c8555a0b"
        },
        {
            "answer": "Otros",
            "value": "20",
            "questionId": "61048fa14868ce31c855595d",
            "uid": "610495014868ce31c8555a0d"
        },
        {
            "answer": "Ninguna",
            "value": "0",
            "questionId": "61048fac4868ce31c855595f",
            "uid": "6104950f4868ce31c8555a0f"
        },
        {
            "answer": "Herramientas ofimáticas",
            "value": "20",
            "questionId": "61048fac4868ce31c855595f",
            "uid": "610495144868ce31c8555a11"
        },
        {
            "answer": "Herramientas de gestión de contabilidad",
            "value": "20",
            "questionId": "61048fac4868ce31c855595f",
            "uid": "6104951a4868ce31c8555a13"
        },
        {
            "answer": "Herramientas de Administración de procesos y recursos – ERP",
            "value": "20",
            "questionId": "61048fac4868ce31c855595f",
            "uid": "6104951d4868ce31c8555a15"
        },
        {
            "answer": "Herramientas de gestión de clientes – CRM",
            "value": "20",
            "questionId": "61048fac4868ce31c855595f",
            "uid": "610495224868ce31c8555a17"
        },
        {
            "answer": "Factura electrónica",
            "value": "20",
            "questionId": "61048fac4868ce31c855595f",
            "uid": "610495264868ce31c8555a19"
        },
        {
            "answer": "Ninguna",
            "value": "0",
            "questionId": "61048fb94868ce31c8555961",
            "uid": "610495354868ce31c8555a1b"
        },
        {
            "answer": "Correo electrónico",
            "value": "15",
            "questionId": "61048fb94868ce31c8555961",
            "uid": "6104953b4868ce31c8555a1d"
        },
        {
            "answer": "Mensajería instantánea",
            "value": "15",
            "questionId": "61048fb94868ce31c8555961",
            "uid": "610495404868ce31c8555a1f"
        },
        {
            "answer": "Servicios en la nube",
            "value": "15",
            "questionId": "61048fb94868ce31c8555961",
            "uid": "610495444868ce31c8555a21"
        },
        {
            "answer": "Servidores compartidos",
            "value": "15",
            "questionId": "61048fb94868ce31c8555961",
            "uid": "6104954a4868ce31c8555a23"
        },
        {
            "answer": "Video conferencia",
            "value": "15",
            "questionId": "61048fb94868ce31c8555961",
            "uid": "6104954f4868ce31c8555a25"
        },
        {
            "answer": "Otros",
            "value": "15",
            "questionId": "61048fb94868ce31c8555961",
            "uid": "610495534868ce31c8555a27"
        }
    ]
}
	`;

const defaultTool = `
{
    "total": 8,
    "tools": [
        {
            "estado": true,
            "nombre": "Treinta",
            "category": "Financial ",
            "description": "Gestiona las transacciones de tu negocio, conoce la utilidad de tu negocio en cualquier momento y registra y cobra deudas 3 veces más eficazmente. Ayuda a tu negocio a crecer más con Treinta, la aplicación financiera gratuita",
            "uid": "6115900018bbe2001613200e"
        },
        {
            "estado": true,
            "nombre": "Rocketfy",
            "category": "Ecommerce",
            "description": "Rocketfy permite crear sin ningún costo una tienda online y es la única plataforma del mercado que en Colombia integra toda la cadena del e-Commerce, desde la tienda virtual hasta la logística post venta. ",
            "uid": "6115909e18bbe2001613204f"
        },
        {
            "estado": true,
            "nombre": "Viliv",
            "category": "management",
            "description": "VILIV nace de la alianza entre Grupo Sura y Grupo Bancolombia y busca brindar a los pequeños empresarios, herramientas para fortalecer sus negocios, apoyar su crecimiento y mejorar su competitividad.  ",
            "uid": "6115911518bbe20016132072"
        },
        {
            "estado": true,
            "nombre": "Cemprende",
            "category": "Innovation",
            "description": "Iniciativa que fortalece el ecosistema de emprendimiento e innovación de país. Desde su plataforma digital y red de puntos físicos a nivel nacional y la construcción de espacios de colaboración logra:",
            "uid": "6115916418bbe20016132095"
        },
        {
            "estado": true,
            "nombre": "Treinta",
            "category": "Financial",
            "description": " Manage your business transactions,know the usefulness of your business at any time and register and collect debts 3 times more efficiently. Help your business grow more with Treinta, the free financial app",
            "uid": "611591f918bbe2001613213f"
        }
    ]
}`;

const defaultExpert = `
{
    "total": 12,
    "usuarios": [
        {
            "estado": true,
            "nombre": "Paola",
            "category": "Administration",
            "correo": "pao3@hotmail.com",
            "phoneNumber": "24321",
            "company": "Software Y.I",
            "experience": " 20 years of experience in leadership as Executive President of the Software TI .Specialist in business administration with an emphasis on senior management and master in digital transformation.",
            "uid": "61152b0727901b0015600882"
        },
        {
            "estado": true,
            "nombre": "Gabriel",
            "category": "Marketing",
            "correo": "gabi@hotmail.com",
            "phoneNumber": "34321",
            "company": "Sopho solutions",
            "experience": " Graphic Designer, commercial and marketing administrator. He has more than 20 years of experience in digital strategy, with more than 14 in digital innovation research",
            "uid": "61152ba727901b0015600888"
        },
        {
            "estado": true,
            "nombre": "Juan David",
            "category": "Social entrepeneur",
            "correo": "juanda@hotmail.com",
            "phoneNumber": "34421",
            "company": "Protalento",
            "experience": "He is the founder of ProTalento, a talent agency for extraordinary talent in the world of technology. In 2020, the Wise Foundation classified him as one of the 19 emerging education leaders in the world.",
            "uid": "61152cb827901b001560088c"
        },
        {
            "estado": true,
            "nombre": "Santiago",
            "category": "Administration",
            "correo": "santi@hotmail.com",
            "phoneNumber": "34491",
            "company": "ANDI",
            "experience": "Vice President of Digital Transformation ANDI, Lawyer from the Pontificia Universidad Javeriana, with a Master's degree in Public Administration from American University in Washington, DC.",
            "uid": "61152d2727901b0015600890"
        },
        {
            "estado": true,
            "nombre": "David",
            "category": "TI educator",
            "correo": "davi@hotmail.com",
            "phoneNumber": "34471",
            "company": "CTO protalento",
            "experience": "Leader, Entrepreneur and Global Change Agent. Currently Director of Ed-Tech and partner of Protalento, digital Talent Accelerator that promotes careers in technology for young people in Latin America.",
            "uid": "61152de827901b0015600892"
        },
        {
            "estado": true,
            "nombre": "Nicolas",
            "category": "Digital Presence",
            "correo": "nico@hotmail.com",
            "phoneNumber": "34475",
            "company": "Imagine apps",
            "experience": "CEO of imagine apps (Digital transformation companty), At the age of 25, he has worked in more than 100 digital projects with startups and companies in Colombia, Latin America and the United States.",
            "uid": "61152e8027901b0015600894"
        }
    ]
}`;
