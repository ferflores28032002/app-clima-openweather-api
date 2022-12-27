import { FallingLines } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center min-h-[13rem] items-center bg-white w-full ">
      <FallingLines
        color="#4338ca"
        width="40"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};
