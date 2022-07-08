import { createContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  es: {
    home: "Inicio",
    about: "Acerca de",
    briefcase: "Portafolio",
    language: "Idioma",
    colores: "Colores",
    /*seccion one*/
    title: "Hola mi nombre es Harvey",
    textSeccionOne:
      "Yo soy ingeniero de software y soy desarrollador front-end con react.",
    /*seccion two*/
    titleSeccionTwo: "Iniciar un proyecto",
    textSeccionTwo:
      "¿Interesado en trabajar juntos? Deberiamos hacer la cola para un chat.Comprare el cafe",
    buttonSeccionTwo: "Hagamoslo",
    titleContactSeccion: "Contactame:",
    textContactEmail: "o mandame un mensaje a mi correo",
    emailMe: "yerik05vh@gmail.com",
    /*projects*/
    titleProjecs: "PROYECTOS",
    firstProjects: "mi-tarea-app",
    firstProjectsText:
      "Una mini aplcacion de productividad donde incluye un pomodoro y una task list ademas que cuenta con alguna opciones para poder configurar la aplicacion al gusto del usuario.",
    secondProjects: "app-negocios",
    secondProjectsText:
      "Una aplicacion desarrollada en React JS, contiene un logeo y un carrito de compras, lo que se deduce que fue desarrollada con 'redux' por otro lado tiene muchos detalles.",
    threeProjects: "calculadora-react",
    threeProjectsText:
      "Una sencilla calculadora con un diseño minimalista, como el propio titulo lo dice es unna calculdora tambien desarrollada en react, simple con operacion exactas.",
    btnViewCode: "ver codigo",
    btnViewApp: "ver app",
    /*seccion six*/
    titleSeccionSix: "HABILIDADES",
    textSeccionSix:
      "            Las tecnologias que use y que practico en mi día a día: HTML, CSS, SASS , JavaScript, React, Webpack, Pug, Bootstrap, Tailwild, GitHub, Terminal de Comandos, npm, yarn, python, C, React redux, Figma. Si quieres ver mis certificados",
    linkSeccionSix: "puedes darme click.",
    btnViewCurri: "ver curriculum",
    btnViewCerti: "ver certificados",
    /*end*/
    titleAbout: "ACERCA DE",
    hiAbout: "Hola",
    textAboutOne:
      "Yo soy Harvey Yerik soy ingeniero de softeware y desarrollador Front-end, ademas estudio diseño UI y UX, me encanta hacer paginas web, si quieres saber de mi vida",
    linkAbout: "sigueme en mis redes sociales.",
    textAboutTwo:
      "Conoce a Harvey, Ahora mismo trabajo increiblemente duro para encontrar un trabajo, y en mis tiempos libres estoy dedicado a estudiar diseño o idiomas sin olvidar l parte fisica que es fundamental. Todo para ayudar a alguien o a mi mismo.",
  },
  en: {
    home: "Home",
    about: "About",
    briefcase: "Briefcase",
    language: "Language",
    colores: "Colors",
    /*seccion one*/
    title: "Hello my name is Harvey",
    textSeccionOne:
      "I am a software engineer and I am a front-end developer with react.",
    /*seccion two*/
    titleSeccionTwo: "Start a project",
    textSeccionTwo:
      "Interested in going down together? We must queue to stop a chat. buy the coffee.",
    buttonSeccionTwo: "Let's do it",
    titleContactSeccion: "Contact me:",
    textContactEmail: "or send me a message to my email",
    emailMe: "yerik05vh@gmail.com",
    /*Projects*/
    titleProjecs: "PROJECTS",
    firstProjects: "my-task-app",
    firstProjectsText:
      "A mini productivity application that includes a pomodoro and a to-do list, as well as some options to configure the application to the user's liking.",
    secondProjects: "app-business",
    secondProjectsText:
      "An application developed in React JS, contains a login and a shopping cart, which follows that it was developed with 'redux' on the other hand it has many.",
    threeProjects: "calculator-react",
    threeProjectsText:
      "A simple calculator with a minimalist design, as the title itself says, it is also a calculator developed in react, simple with exact operations.",
    btnViewCode: "view code",
    btnViewApp: "view app",
    /*seccion six*/
    titleSeccionSix: "SKILLS",
    textSeccionSix:
      "            The technologies I use and practice in my day to day: HTML, CSS, SASS , JavaScript, React, Webpack, Pug, Bootstrap, Tailwild, GitHub, Command Terminal, npm, yarn, python, C, React redux, Figma. If you want to see my certificates",
    linkSeccionSix: "you can click me.",
    btnViewCurri: "view resume",
    btnViewCerti: "view certificates",
    /*end*/
    titleAbout: "ABOUT ME",
    hiAbout: "Hi",
    textAboutOne:
      "I am Harvey Yerik i am enginner software, and front end developer, also i study UI and UX desinger, I love it make web sites. If want know my life",
    linkAbout: "follow me en my social media.",
    textAboutTwo:
      "Meet Harvey, right now I work incredibly hard to get a job, on the other hand in my free time study design or languages ​​without neglecting my physical part doing exercises, All this is to help someone, me or someone else..",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (e) => {
    e.preventDefault();
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
      localStorage.setItem("language", "es");
    } else {
      setLanguage("en");
      setTexts(translations.en);
      localStorage.setItem("language", "en");
    }
  };
  document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("language") == "en") {
      setLanguage("en");
      setTexts(translations.en);
    } else {
      setLanguage("es");
      setTexts(translations.es);
    }
  });

  const data = { texts, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
