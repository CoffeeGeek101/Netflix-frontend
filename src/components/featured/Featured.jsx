import { InfoOutlined, PlayArrowRounded } from "@mui/icons-material"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import style from "./featured.css"

export default function Featured({type}) {
  const [content, setContent] = useState({}); 

  useEffect(()=>{
      const setFeature = async()=>{
        try{
          const featured = await axios.get(`/movies/random/?type=${type}`,{
            headers :{
              token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E4NGVkZTkzNjY0NDU5ZmE3MzIyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDIzMTE3OSwiZXhwIjoxNjc0NjYzMTc5fQ.UFqMsafptsCwiC0S_Z_dsWTVhNSeOwnPEHGwRADTKzs"
            }
          });
          console.log(featured.data);
          setContent(featured.data[0]);
        }catch(err){
          console.log(err);
        }
      }
      setFeature();
  },[type]);

  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "TV Shows"}</span>
                <select  name="genre" id="genre">
                    <option>Genres</option>
                    <option value="adventure">Adventure</option>
                    <option value="comdey">Comdey</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="anime">Anime</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img
        className="hero"
        width="100%" 
        src={content.heroImg}
        />
        <div className="info">
           <img src={content.logoImg}/>
           <span>{content.description}</span> 
             <div className="actions">
                <button className="play-show"><PlayArrowRounded sx={{fontSize:"40px"}}/>Play</button>
                <button className="about-show"><InfoOutlined sx={{fontSize:"30px"}}/> More Info</button>
             </div>
        </div>
        <div className="hero-shadow"></div>
        
    </div>
  )
}
