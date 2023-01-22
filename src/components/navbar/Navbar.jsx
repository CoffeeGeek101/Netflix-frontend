import { ArrowDropDownSharp, CreateSharp, InfoSharp, MoveDownSharp, NotificationsNoneSharp, PersonSharp, SearchSharp } from "@mui/icons-material"
import { useState } from "react"
import { Link } from "react-router-dom";
import style from "./navbar.css"

export default function Navbar() {

    const[isScolled, setIsScrolled] = useState(false);

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return() => (window.onscroll = null);
    }

  return (
    <div className={isScolled ? "navbar-scolled" : "navbar"}>
        <div className="nav-container">
            <div className="nav-left">
                <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
                <Link to="/" className="link">
                <span>Home</span>
                </Link>
                <Link to="/series" className="link">
                <span>TV Shows</span>
                </Link>
                <Link to="/movies" className="link">
                <span>Movies</span>
                </Link>
                <span>New & Popular</span>
                <span>My List</span>
                <span>Browse by Language</span>
            </div>
            <div className="nav-right">
                <SearchSharp/>
                <span>Children</span>
                <NotificationsNoneSharp className="notification"/>
                <div className="account">
                <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT2mbllqvHazlPmf3WU5bjhOBACt7Ne-IVlrxNSg6UtLN4OLbqmrWXF4G1hpkjQaYFZLw7E0cb_EYutgcU"/>
                <ArrowDropDownSharp className="drop"/>
                    <div className="option">
                        <div className="profile">
                        <img className="pfp" src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT2mbllqvHazlPmf3WU5bjhOBACt7Ne-IVlrxNSg6UtLN4OLbqmrWXF4G1hpkjQaYFZLw7E0cb_EYutgcU"/>
                        <span>LeviSenpai</span>
                        </div>
                        <span className="profile"><CreateSharp/> Manage Profiles</span>
                        <span className="profile"><MoveDownSharp/>Transfer Profile</span>
                        <span className="profile"><PersonSharp/>Account</span>
                        <span className="profile"><InfoSharp/>Help Center</span>
                        <hr/>
                        <p>Logout of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
