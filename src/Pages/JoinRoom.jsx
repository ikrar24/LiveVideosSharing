import React, { useState } from "react";
import { HiX } from "react-icons/hi";

function JoinRoom({ ToggleJoinBtn, setJoinToggle }) {
  const [roomCode, setRoomCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!roomCode.trim()) {
      alert("Please enter a valid Room Code!");
      return;
    }
    console.log("Joining Room with code:", roomCode);
    alert(`Joined Room: ${roomCode}`);
    setJoinToggle(false); // modal close
  };

  return (
    <section
      className={`${
        ToggleJoinBtn ? "flex" : "hidden"
      } fixed w-full rounded-t-2xl h-[100%] bg-white text-gray-800 flex-col p-5`}
    >
      {/* Close Icon */}
      <HiX
        className="absolute top-4 right-4 text-2xl cursor-pointer"
        onClick={() => setJoinToggle(false)}
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-md mx-auto mt-20"
      >
        {/* Room Code Input */}
        <div>
          <label className="block mb-2 font-semibold">Enter Room Code</label>
          <input
            type="text"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            placeholder="Room Code"
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>

        {/* Join Button */}
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
        >
          Join Room
        </button>
      </form>
    </section>
  );
}

export default JoinRoom;
