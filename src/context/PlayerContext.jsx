import { createContext, useEffect } from "react";
import { useRef, useState } from "react";
import { songsData } from "../assets/assets";
import { Await } from "react-router-dom";

const PlayerContext = createContext();

export const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekbg = useRef();
  const seekbar = useRef();
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setplayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      seconds: 0,
      minutes: 0,
    },
    totalTime: {
      seconds: 0,
      minutes: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setplayStatus(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setplayStatus(false);
  };

  const playwithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setplayStatus(true);
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekbar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            seconds: Math.floor(audioRef.current.currentTime % 60),
            minutes: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            seconds: Math.floor(audioRef.current.duration % 60),
            minutes: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
      setTime;
    }, 1000);
  }, [audioRef]);

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setplayStatus(true);
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setplayStatus(true);
    }
  };

  const seekSong = (e)=>{
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekbg.current.offsetWidth)*audioRef.current.duration)
        
  }


  const contextValue = {
    audioRef,
    seekbg,
    seekbar,
    track,
    setTrack,
    playStatus,
    setplayStatus,
    time,
    setTime,
    play,
    pause,
    playwithId,
    previous,
    next,
    seekSong
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
