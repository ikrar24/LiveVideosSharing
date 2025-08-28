import React, { useState } from "react";
import CreateRoom from "../CreateRoom";
import JoinRoom from "../JoinRoom";

function Room() {
  const [JoinToggle, setJoinToggle] = useState(false);
  const [CrateToggle, setCrateToggle] = useState(false);

  return (
    <header className="z-50 mt-20 flex w-full h-auto justify-center p-5 items-center">
      <div className="flex md:justify-between justify-center gap-5 md:gap-0 items-center flex-wrap md:flex-nowrap">
        
        {/* room section */}
        <div className="flex md:items-start items-center justify-center flex-col gap-5">
          <p className="text-3xl md:text-4xl text-center font-bold text-white leading-[3rem] md:leading-10">
            Create Or Join A Room And{" "}
            <span className="bg-yellow-400 text-black px-2 rounded-md mr-1">
              Connect
            </span>{" "}
            With Your{" "}
            <span className="bg-black text-white px-2 rounded-md mr-1">
              Partner
            </span>{" "}
            Now
          </p>

          {/* button section */}
          <div className="flex justify-center items-center w-full gap-3">
            {/* Create Room button */}
            <button
              className="peer bg-pink-500 text-black p-2 rounded-md font-semibold transition-all hover:bg-white hover:black"
              onClick={() => setCrateToggle(true)}
            >
              Create Room
            </button>

            {/* Join Room button */}
            <button
              className="bg-white text-black p-2 rounded-md font-semibold transition-all peer-hover:bg-pink-500 peer-hover:text-black"
              onClick={() => setJoinToggle(true)}
            >
              Join Room
            </button>
          </div>
        </div>

        {/* img section Box */}
        <div className="bg-black overflow-hidden w-[60%] rounded-md">
          <img
            src="https://cdn.dribbble.com/userupload/23929554/file/original-30a7c380e6053e135ccecca715429a7d.gif"
            alt="explainbg"
          />
        </div>
      </div>

      {/* Modals */}
      <CreateRoom ToggleCreateBtn={CrateToggle} setCrateToggle={setCrateToggle} />
      <JoinRoom ToggleJoinBtn={JoinToggle} setJoinToggle={setJoinToggle} />
    </header>
  );
}

export default Room;
