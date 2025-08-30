import React, { useEffect, useRef, useState } from "react";
import { FaShareAlt, FaPause, FaPlay } from "react-icons/fa";
import { MdFullscreenExit, MdFullscreen } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const RoomInfo = () => {
  const [ProgressWidth, setProgressWidth] = useState("");
  const [togglePlayPause, setTogglePlayPause] = useState(false);
  const [toggleFullScreen, setToggleFullScreen] = useState(false);

  const videoData = useRef(null);
  const videoContainerRef = useRef(null);

  // progress bar update
  useEffect(() => {
    if (!videoData) return;

    const widthFun = () => {
      if (videoData.current.duration > 0) {
        const duration = videoData.current.duration;
        const currentTime = videoData.current.currentTime;
        const totalWidhtPercentage = (currentTime / duration) * 100;
        setProgressWidth(totalWidhtPercentage);
      }
    };

    videoData.current.addEventListener("timeupdate", widthFun);

    return () => {
      if (videoData.current) {
        videoData.current.removeEventListener("timeupdate", widthFun);
      }
    };
  }, []);

  const handleVideoPlay = () => {
    if (videoData.current) {
      videoData.current.play();
      setTogglePlayPause(true);
    }
  };

  const handleVideoPause = () => {
    if (videoData.current) {
      videoData.current.pause();
      setTogglePlayPause(false);
    }
  };

  // full screen handle

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen();
      setToggleFullScreen(true);
    } else {
      document.exitFullscreen();
      setToggleFullScreen(false);
    }
  };



  // agar user Esc press karke fullscreen se bahar aaya
  useEffect(() => {
    const onFullScreenChange = () => {
      if (!document.fullscreenElement) {
        setToggleFullScreen(false);
      }
    };

    document.addEventListener("fullscreenchange", onFullScreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullScreenChange);
  }, []);

  // video complete hone par play icon wapas
  useEffect(() => {
    if (Math.floor(ProgressWidth) === 100) {
      setTogglePlayPause(false);
    }
  }, [ProgressWidth]);

  return (
    <>
      <section className="mb-5 mt-16">
        {/* room code */}
        <div className="flex items-center justify-start ml-5 gap-3">
          <h1 className="text-2xl uppercase text-white font-bold">
            This is your Code
          </h1>
          <p className="bg-white py-1 px-6 rounded-xl shadow-lg shadow-blue-800">
            6786
          </p>
          <span>
            <FaShareAlt className="text-white cursor-pointer" />
          </span>
        </div>

        {/* video box */}
        <div className="relative w-screen flex items-center justify-center mt-10 h-auto">
          <div
            ref={videoContainerRef}
            className="w-[90%] h-[50vh] md:h-[80vh] rounded bg-black relative"
          >
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              className="w-full h-full object-contain"
              ref={videoData}
              muted
            ></video>

            {/* controls */}
            <div className="absolute text-white left-4 bottom-2 text-xl flex items-center gap-3">
              {togglePlayPause ? (
                <FaPause
                  onClick={handleVideoPause}
                  className="cursor-pointer"
                />
              ) : (
                <FaPlay onClick={handleVideoPlay} className="cursor-pointer" />
              )}

              <div className="flex md:w-[80vw] w-[75vw] items-center justify-between">
                <div className="flex gap-1">
                  <p>
                    {videoData.current
                      ? `${String(
                          Math.floor(videoData.current.currentTime / 60)
                        ).padStart(2, "0")}:${String(
                          Math.floor(videoData.current.currentTime % 60)
                        ).padStart(2, "0")}`
                      : "00:00"}
                  </p>
                  <span>/</span>
                  <p>
                    {videoData.current
                      ? `${String(
                          Math.floor(videoData.current.duration / 60)
                        ).padStart(2, "0")}:${String(
                          Math.floor(videoData.current.duration % 60)
                        ).padStart(2, "0")}`
                      : "00:00"}
                  </p>
                </div>

                {/* fullscreen button */}
                <div className="flex justify-center items-center gap-5">
                  {toggleFullScreen ? (
                    <MdFullscreenExit
                      className="text-3xl cursor-pointer"
                      onClick={handleFullScreen}
                    />
                  ) : (
                    <MdFullscreen
                      className="text-3xl cursor-pointer"
                      onClick={handleFullScreen}
                    />
                  )}

                  {/* qualityHandling  */}
                  <div className="cursor-pointer" ><BsThreeDotsVertical/></div>
                </div>
              </div>
            </div>

            {/* progress bar */}
            <div className="flex items-center justify-start bg-gray-500 absolute w-full h-[4px] bottom-0">
              <div
                className="h-full bg-white"
                style={{ width: `${ProgressWidth}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomInfo;
