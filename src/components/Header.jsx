import { useTranslation } from "react-i18next";

export const Header = () => {

  const { i18n } = useTranslation("global");

  const cambiarIdioma = ({ estado }) => {

    if (estado === true) {

      i18n.changeLanguage("es");
      localStorage.setItem("idioma", "es");

    } else {

      i18n.changeLanguage("en");
      localStorage.setItem("idioma", "en");

    }
  };

  return (
    <div className="absolute right-10 top-3 flex w-24 gap-4">

      <button onClick={() => cambiarIdioma({ estado: true })}>
        
        <img src="es.png" alt="Es" />
      
      </button>
      
      <button onClick={() => cambiarIdioma({ estado: false })}>
      
        <img src="en.png" alt="En" />
      
      </button>
    </div>
  );
};
