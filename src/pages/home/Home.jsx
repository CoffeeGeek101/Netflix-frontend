import Featured from "../../components/featured/Featured"
import Footer from "../../components/footer/Footer"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import style from "./home.css"
import axios from "axios";
import { useState } from "react"
import { useEffect } from "react"

export default function Home({type}) {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    useEffect(()=>{
      const randomList = async()=>{
        try{
          const res = await axios.get(`lists${type ? "?type="+ type :""}
                  ${genre ? "&genre=" + genre : ""}`, {
                    headers :{
                      token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E4NGVkZTkzNjY0NDU5ZmE3MzIyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDIzMTE3OSwiZXhwIjoxNjc0NjYzMTc5fQ.UFqMsafptsCwiC0S_Z_dsWTVhNSeOwnPEHGwRADTKzs"
                    }
                  }
                  );
          console.log(res.data);        
          setLists(res.data);
        }catch(err){
          console.log(err);
        }
      };
      randomList();
    },[type,genre]);

  return (
    <div className="home">
        <Navbar/>
        <Featured type={type} />
        {
          lists.map((list)=>(
            <List list={list}/>
          ))
        }
        <Footer/>       
    </div>
  )
}
