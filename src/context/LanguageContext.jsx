import { createContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  es: {
    home: "Inicio",
    about: "Acerca de",
    briefcase: "Portafolio",
    language: "Idioma",
    colores: "Temas",
    /*seccion one*/
    title: "Hola, mi nombre es Harvey",
    textSeccionOne:
      "Yo soy Front End Developer con React y pronto seré Ingeniero de software.",
    /*seccion two*/
    titleSeccionTwo: "Iniciar un proyecto",
    textSeccionTwo:
      "¿Interesado en trabajar juntos? Deberíamos hacer una cola en el chat. Comprare el café.",
    buttonSeccionTwo: "Hagámoslo",
    titleContactSeccion: "Contáctame:",
    textContactEmail: "o mándame un mensaje a mi email",
    emailMe: "yerik05vh@gmail.com",
    /*projects*/
    titleProjecs: "PROYECTOS",
    firstProjects: "frond-end-challenge",
    firstProjectsText:
      "Aquí puedes ver todos mis proyectos que realice, donde aplique todos mis conocimientos de React, JavaScript, y otros.",
    secondProjects: "my-tarea-app",
    secondProjectsText:
      "Una aplicación de tareas además contiene un pomodoro, tienes un darkmode, y puedes cambiar la tipografía, fue desarrollado con JavaScript vanilla.",
    threeProjects: "easybank",
    threeProjectsText:
      "Una app sencilla, que fue desarrollada con React, en el proceso de desarrollo se aprendió a usar la librería de styled-component que sirve para ingresar CSS en JavaScript.",
    btnViewCode: "ver código",
    btnViewApp: "ver app",
    /*seccion six*/
    titleSeccionSix: "HABILIDADES",
    textSeccionSix:
      "Las tecnologías que conozco y practico son: HTML, CSS, JavaScript, React, Redux, Webpack, GitHub, SASS, Pug, Bootstrap, Tailwild, Terminal de Comandos, npm, yarn, python, C, Figma. Si quieres ver mis certificados ",
    linkSeccionSix: "puedes darme click aquí.",
    btnViewCurri: "ver currículu",
    btnViewCerti: "ver certificados",
    /*end*/
    titleAbout: "ACERCA DE",
    hiAbout: "Hola",
    textAboutOne:
      "Mi nombre es Harvey Yerik soy desarrollador Front-End con React además estudio ingeniería de software y diseño UI y UX. Si quieres saber lo que hago ",
    linkAbout: "sígueme en mis redes sociales.",
    textAboutTwo:
      "Conoce a Harvey, Ahora mismo estudio increíblemente duro para aprender nuevas tecnologías y en mis tiempos libres estoy dedicado a construir habilidades increíbles, por supuesto quiero ser Ingeniero en Machine Learning.",
    //Modal
    titleModalOne: "contáctame",
    textModalOne: "y tienes mi email:",
    buttonModalOne: "copiar email",
    titleModalTwo: "certificados",
    textModalTwo:
      "En lo siguiente podrá observar certificados de: React, NextJs, NodeJS, Webpack, GitHub, HTML, CSS y Python,",
    linkModalTwo: " puedes dar click aquí para ver mi perfil en Platzi",
  },
  en: {
    home: "Home",
    about: "About",
    briefcase: "Briefcase",
    language: "Language",
    colores: "Theme",
    /*seccion one*/
    title: "Hello, my name is Harvey",
    textSeccionOne:
      "I am a Front End Developer with React and soon I will be a Software Engineer.",
    /*seccion two*/
    titleSeccionTwo: "Start a project",
    textSeccionTwo:
      "Interested in working together? We should queue up in chat. Buy the coffee.",
    buttonSeccionTwo: "Let's do it",
    titleContactSeccion: "Contact me:",
    textContactEmail: "or send me a message to my email",
    emailMe: "yerik05vh@gmail.com",
    /*Projects*/
    titleProjecs: "PROJECTS",
    firstProjects: "frond-end-challenge",
    firstProjectsText:
      "Here you can see all my projects to do, where I can apply all my knowledge of React, JavaScript, and others.",
    secondProjects: "my-task-app",
    secondProjectsText:
      "A task app also contains a pomodoro, you have a dark mode, and you can change the font, it was developed with vanilla JavaScript.",
    threeProjects: "easybank",
    threeProjectsText:
      "A simple application, which was developed with React, in the development process we learned to use the styled-component library that is used to insert CSS into JavaScript.",
    btnViewCode: "view code",
    btnViewApp: "view app",
    /*seccion six*/
    titleSeccionSix: "SKILLS",
    textSeccionSix:
      " The technologies I know and use are: HTML, CSS, JavaScript, React, Redux, Webpack, GitHub, SASS, Pug, Bootstrap, Tailwild, Command Terminal, npm, yarn, python, C, Figma. If you want to see my certificates ",
    linkSeccionSix: "you can click here.",
    btnViewCurri: "view resume",
    btnViewCerti: "view certificates",
    /*end*/
    titleAbout: "ABOUT",
    hiAbout: "Hi!",
    textAboutOne:
      "My name is Harvey Yerik, I'm a Front-End developer with React, and I'm also studying software engineering and UI and UX design. If you want to know what I do, ",
    linkAbout: "follow me on my social networks.",
    textAboutTwo:
      "Meet Harvey, Right now I study incredibly hard to learn new technologies and in my spare time I am dedicated to building amazing skills, of course I want to be a Machine Learning Engineer.",
    //Modal
    titleModalOne: "contact me",
    textModalOne: "you also have my email:",
    buttonModalOne: "copy my email",
    //Second Modal
    titleModalTwo: "certificates",
    textModalTwo:
      "In the following you can see certificates of: React, NextJs, NodeJS, Webpack, GitHub, HTML, CSS and Python,",
    linkModalTwo: " you can click here to see my profile in Platzi.",
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
