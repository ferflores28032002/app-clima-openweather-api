import { FallingLines } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex fixed left-0 top-0 justify-center flex-col gap-3 items-center bg-white w-full min-h-screen">
      <FallingLines
        color="#4338ca"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />

      <h4>Cargando ...</h4>
    </div>
  );
};
