import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material"
import style from "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="socials">
            <Facebook sx={{fontSize:"28px", color:"#fff"}}/>
            <Twitter sx={{fontSize:"28px", color:"#fff"}}/>
            <Instagram sx={{fontSize:"28px", color:"#fff"}}/>
            <YouTube sx={{fontSize:"28px", color:"#fff"}}/>
        </div>
        <div className="web-info">
            <div className="colm">
                <span>Audio Description</span>
                <span>Investor Relation</span>
                <span>Legal Notices</span>
            </div>
            <div className="colm">
                <span>Help Center</span>
                <span>Jobs</span>
                <span>Cookie Preferences</span>
            </div>
            <div className="colm">
                <span>Gift Card</span>
                <span>Terms of USe</span>
                <span>Corporate Information</span>
            </div>
            <div className="colm">
                <span>Media Center</span>
                <span>Privacy</span>
                <span>Contact Us</span>
            </div>
        </div>
        <button className="Scode">Service Code</button>
        <p className="copyright">© 2023 - Shoumyadeep Narayan</p>
        </div>
    </div>
  )
}
