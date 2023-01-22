import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
import { useRef, useState } from "react"
import ListItem from "../listItem/ListItem"
import style from "./list.css"

export default function List({list}) {

    const [slide, setSlide] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slide > 0){
            setSlide(slide - 1);
            listRef.current.style.transform = `translateX(${225 + distance}px)`;
        }
        if(direction === "right" && slide < 5){
            setSlide(slide + 1);
            listRef.current.style.transform = `translateX(${-225 + distance}px)`;
        }
        // console.log(listRef.current.style.transform);
    };

  return (
    <div className="list">
        <div className="list-container">
        <span className="list-title">{list.title}</span>
            <ArrowBackIosNewOutlined 
            sx={{fontSize:"45px"}} 
            className="list-control left"
            onClick={()=> handleClick("left")}
            style={{display: !isMoved && "none"}}
            />
            <div className="list-wrapper" ref={listRef}>
                {
                    list.content.map((item, i)=>(
                        <ListItem item={item} index={i}/>
                    ))
                }
            </div>
            <ArrowForwardIosOutlined 
            sx={{fontSize:"45px"}} 
            className="list-control right"
            onClick={()=> handleClick("right")}
            />
        </div>
    </div>
  )
}
