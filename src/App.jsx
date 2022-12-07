import { useEffect, useState } from "react";
import Icons from "./helpers/Icons";
import { ToastContainer } from "react-toastify";
import { useClima } from "./hooks/useClima";
import { Loading } from "./helpers/Loading";

const App = () => {
  const { loading, data, climaActual } = useClima();
  const [search, setSearch] = useState("Roma");

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
     
      <div className="absolute right-10 top-3 flex w-24 gap-4">
        <button>
          <img src="es.png" alt="Es" />
        </button>
        <button>
          <img src="en.png" alt="En" />
        </button>
      </div>

      <div className="shadow-2xl w-96 bg-white h-96">
        <div>
          <input
            type="text"
            placeholder="Buscar ciudad ..."
            name="search"
            onKeyDown={handleSubmit}
            autoFocus
            className="w-full outline-none border-none py-3 px-3 text-sm shadow-lg"
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
            <button onClick={() => setSearch("Londres")}>Londres</button>
            <button
              className="border-x-2 px-6"
              onClick={() => setSearch("Toronto")}
            >
              Toronto
            </button>
            <button onClick={() => setSearch("Singapur")}>Singapur</button>
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
