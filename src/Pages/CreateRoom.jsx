import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { toast } from "react-toastify";

function CreateRoom({ ToggleCreateBtn, setCrateToggle }) {
  const [video, setVideo] = useState(null);
  const [name, setName] = useState("");

  const handleVideoChange = (e) => {
    const file = e.target.files[0]; // ek hi file select hogi
    if (file && file.type.startsWith("video/")) {
      setVideo(URL.createObjectURL(file)); // preview ke liye blob url
    } else {
      toast.error("Please select a valid video file!" ,{position:"top-center"})
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!video || !name) {
      toast.error("Please upload a video and enter your name!" , {position:"top-center"})
      return;
    }
    console.log("Video Selected:", video);
    console.log("Name:", name);
    toast.success("Room Created Successfully!",{position:"top-center"});
    setCrateToggle(false); // modal close
  };

  return (
    <section
      className={`${
        ToggleCreateBtn ? "flex" : "hidden"
      } fixed w-full rounded-t-2xl h-[90%] bg-white text-gray-800 flex-col p-20 overflow-y-scroll createRoomSection bottom-0 `}
    >
      {/* Close Icon */}
      <HiX
        className="absolute top-4 right-4 text-2xl cursor-pointer"
        onClick={() => setCrateToggle(false)}
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-md mx-auto mt-10"
      >
        {/* Video Upload */}
        <div>
          <label className="block mb-2 font-semibold">Upload Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="w-full border p-2 rounded-lg"
          />

          {/* Video Preview */}
          {video && (
            <video
              src={video}
              controls
              className="mt-4 rounded-lg w-full max-h-60"
            />
          )}
        </div>

        {/* Name Input */}
        <div>
          <label className="block mb-2 font-semibold">Enter Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>

        {/* Create Room Button */}
        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-800 text-white py-2 px-4 rounded-lg"
        >
          Create Room
        </button>
      </form>
    </section>
  );
}

export default CreateRoom;
