"use client";

import { PuffLoader } from "react-spinners";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center">
      <PuffLoader size={100} color="black" />
    </div>
  );
};

export default Loader;
