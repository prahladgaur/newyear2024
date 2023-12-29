import videoBg from "../assets/newyear.mp4";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Player() {
  //const {data} = props
  const location = useLocation();

  console.log(location.state);
  // location.state.id = "ram"

  const [muted, setmuted] = useState(false);
  const [mutetext, setmutetext] = useState("Mute");

  const mute = () => {
    if (muted == true) {
      setmutetext("Mute");
      setmuted(false);
    } else {
      setmutetext("UnMute");
      setmuted(true);
    }
    //console.log("muted")
  };

  return (
    <>
      <div className="player">
        <video src={videoBg} autoPlay loop muted={muted} />
        <div className="fixed-btn"><button onClick={mute}>{mutetext}</button></div>
        <div className="fixed-name">Wishing You A Very Happy New Year {location.state.id}</div> 
         
      </div>
    </>
  );
}

export default Player;
