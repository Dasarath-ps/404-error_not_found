import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const naviage = useNavigate();
  const now = new Date();

  return (
    <div className="grid h-screen w-screen grid-cols-2">
      <div className="flex flex-col items-center justify-center border-2 m-20">
        <button onClick={() => naviage("/interroom")}>New Meeting</button>
      </div>
      <div className="flex flex-col items- center border-2 m-20 justify-center">
        <button onClick={() => naviage("/joinroom")}>Join Meeting</button>
      </div>
    </div>
  );
};

export default Home;
