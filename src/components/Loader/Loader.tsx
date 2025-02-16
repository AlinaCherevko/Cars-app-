import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-lg text-blue-700">Loading...</p>
    </div>
  );
};

export default Loader;
