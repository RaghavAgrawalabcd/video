import "./App.css";
import { useState, useRef, useEffect} from "react";
import video1 from "./iphone1.mp4";
import video2 from "./iphone2.mp4";
import video3 from "./iphone3.mp4";
import video4 from "./iphone4.mp4";
import iphone1 from "./iphone1.jpg"
import iphone2 from "./iphone2.jpg"
import iphone3 from "./iphone3.jpg"
import iphone4 from "./iphone4.jpg"
function App() {
  const [play, setPlay] = useState(false)
  const videoRef = useRef();
  function playVideo(video) {
    setPlay(true)

    setTimeout(() => {
        videoRef.current.src = video
    }, 10);
        setTimeout(() => {
          setPlay(false)
        }, 12000);
      }
  useEffect(() => {
    return () => {

    }
  }, [])
  return (
    <div className="App">
      {play === true ?
        <div className="player">
          <video ref={videoRef} id="apple"  autoPlay>
            <source  src={video1}></source>
        </video>
        </div>
        :
        <div className="thumbnail">
          <ul>
            <li onClick={()=>{playVideo(video1)}}><img src={iphone1 }/></li>
            <li onClick={()=>{playVideo(video2)}}><img src={iphone2 }/></li>
            <li onClick={()=>{playVideo(video3)}}><img src={iphone3 }/></li>
            <li onClick={()=>{playVideo(video4)}}><img src={iphone4 }/></li>
          </ul>
      </div>}
    </div>
  );
}

export default App;
