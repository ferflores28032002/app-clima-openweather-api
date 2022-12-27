import { ToastContainer } from "react-toastify";

import { Header, InfoClima } from "./components/";

const App = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-indigo-800">
      <Header />

      <div className="shadow-2xl w-[24rem]  bg-white  z-50">
        <InfoClima />
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
