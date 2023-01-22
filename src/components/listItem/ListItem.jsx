import { AddCircleTwoTone, ExpandCircleDownTwoTone, FiberManualRecordTwoTone, KeyboardArrowDownSharp, PlayCircleFilledSharp, ThumbUpAltTwoTone, ThumbUpOffAltRounded } from "@mui/icons-material"
import { useState } from "react"
import style from "./listItem.css"
import axios from "axios";
import { useEffect } from "react";

export default function ListItem({item,index}) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  //  const trailer = "https://v.pinimg.com/videos/mc/hls/89/b1/2a/89b12acbfea74ef7dfe2c68706faa3a8.m3u8";
 
  useEffect(()=>{
    const movies = async()=>{
      try{
        const res = await axios.get("/movies/find/"+item, {
          headers :{
            token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E4NGVkZTkzNjY0NDU5ZmE3MzIyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDIzMTE3OSwiZXhwIjoxNjc0NjYzMTc5fQ.UFqMsafptsCwiC0S_Z_dsWTVhNSeOwnPEHGwRADTKzs"
          }
        })
        // console.log(res.data);
        setMovie(res.data);
      }catch(err){
        console.log(err);
      }
    }
    movies();
  },[item]);


  return (
    <div className="items"
         style={{left: isHovered && index*220 - 45 + index*2.5}}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
    >
      <img className="cover" src={movie.coverImg}/>
        {isHovered && 
        <>
        <video src={movie.trailer} autoPlay={true} loop />
        <div className="program-info">
              <div className="icons">
                <PlayCircleFilledSharp sx={{fontSize:"40px"}}/>
                <AddCircleTwoTone sx={{fontSize:"40px"}}/>
                <ThumbUpAltTwoTone sx={{fontSize:"40px"}}/>
                <ExpandCircleDownTwoTone sx={{fontSize:"40px", ml:"115px"}}/>
              </div>
              <div className="card-des">
                <span className="match">{movie.preference}</span>
                <div className="card-nfo">
                  <button>U/A {movie.ageLimit}+</button>
                  <span>{movie.duration}</span>
                  <button>{movie.quality}</button>
                </div>
                <span>{movie.tagOne}<span className="dot">.</span> {movie.tagTwo} <span className="dot">.</span> {movie.tagThree}</span>
              </div>
          </div>
        </>
        }
    </div>
  )
}
