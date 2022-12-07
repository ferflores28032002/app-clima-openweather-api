import { useEffect, useState } from "react";
import Icons from "./helpers/Icons";
import { ToastContainer } from "react-toastify";
import { useClima } from "./hooks/useClima";
import { Loading } from "./helpers/Loading";
import { useTranslation } from "react-i18next";
import { Header } from "./components/";

const App = () => {
  const { loading, data, climaActual } = useClima();
  const [search, setSearch] = useState("Nicaragua");
  const { t } = useTranslation("global");

  useEffect(() => {
    climaActual({ busqueda: search });
  }, [search]);

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-indigo-800">

      <Header/>

      <div className="shadow-2xl w-[22rem] md:w-96 bg-white h-96">

        <div>

          <input
            type="text"
            placeholder={t("formSearch")}
            name="search"
            onKeyDown={handleSubmit}
            className="w-full outline-none border-none py-4 px-3 text-sm shadow-lg"
          />

          <h1 className="text-center text-3xl text-gray-600 pt-8">
            {data?.name}
          </h1>

          <div className="flex items-center justify-center gap-4">

            <h1 className="text-5xl text-gray-500">
              {data?.main?.temp.toFixed(0)} &deg;
            </h1>

            <img
              className="w-52"
              src={Icons(data?.weather?.[0]?.main)}
              alt="icono"
            />

          </div>

          <div className="flex py-2 items-center bg-indigo-700 justify-around text-white text-sm">
            
            <button onClick={() => setSearch(t("city.city1"))}>{t("city.city1")}</button>
           
            <button
              className="border-x-2 px-6"
              onClick={() => setSearch(t("city.city2"))}
            >
              {t("city.city2")}
            </button>

            <button onClick={() => setSearch(t("city.city3"))}>{t("city.city3")}</button>
          
          </div>

          <div className="bg-indigo-700 text-white text-3xl w-full min-h-[7rem] flex items-center justify-center gap-2">
          
            <h1>{data?.main?.temp_min.toFixed(0)}&deg; |</h1>
            <h1>{data?.main?.temp_max.toFixed(0)}&deg;</h1>
          
          </div>
        
        </div>
      
      </div>
      
      <ToastContainer />
    
    </div>
  );
};

export default App;
