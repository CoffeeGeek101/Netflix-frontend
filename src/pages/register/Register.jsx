import { ArrowForwardIos, Downloading } from "@mui/icons-material"
import { useRef, useState } from "react"
import Footer from "../../components/footer/Footer"
import style from "./register.css"

export default function Register() {
    const mailRef = useRef();
    const passwordRef = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleStart = () =>{
        setEmail(mailRef.current.value);
    };

    const handleEnd = () => {
        setPassword(passwordRef.current.value);
    }

  return (
    <>
    <div className="resgister">
        <div className="top">
            <div className="wrapper">
                <img className="net-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"/>
                <button className="sign-up">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV </h1>
            <h1>shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
            Ready to watch? Enter your email to create or restart your membership.
            </p>
            {
            !email ? 
                
                (<div className="input">
                    <input type="email" placeholder="Email address" ref={mailRef}/>
                    <button className="registerBtn" onClick={handleStart}>Get Started<ArrowForwardIos/></button>
                </div>) 
            
            : 
            
                (<form className="input">
                    <input type="password" placeholder="Password" ref={passwordRef}/>
                    <button className="registerBtn" onClick={handleEnd}>Continue<ArrowForwardIos/></button>
                </form>)
            }
        </div>
    </div>
    <hr/>
    <div className="feature-bar">
        <div className="bar-wrapper">
            <div className="bar-txt">
                <h1>Enjoy on your TV.</h1>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast,
                 Apple TV, Blu-ray players and more.
                 </p>
            </div>
            <div className="bar-hero">
                <img className="netflix-tv" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
                <div className="vid-container">
                <video autoPlay={true} loop className="video-ani" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" />
                </div>
            </div>
        </div>
    </div>
    <hr/>
    <div className="feature-bar">
        <div className="bar-wrapper">
        <div className="bar-hero-b">
                <img className="netflix-dwnd" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"/>
                <div className="download">
                    <img  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"/>
                    <div className="dwnd-txt">
                        <span>Stranger Things</span>
                        <p>Downloading...</p>
                    </div>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"/>
                </div>
            </div>
            <div className="bar-txt">
                <h1>Download your shows to watch offline.</h1>
                <p>Save your favourites easily and 
                always have something to watch.
                </p>
            </div>
        </div>
    </div>
    <hr/>
    <div className="feature-bar">
        <div className="bar-wrapper">
            <div className="bar-txt">
                <h1>Watch everywhere.</h1>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                 </p>
            </div>
            <div className="bar-hero">
                <img className="netflix-tv" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"/>
                <div className="vid-container-c">
                <video autoPlay={true} loop className="video-ani-b" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" />
                </div>
            </div>
        </div>
    </div>
    <hr/>
    <div className="feature-bar">
        <div className="bar-wrapper">
        <div className="bar-hero-b">
                <img className="netflix-dwnd" src="https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"/>
            </div>
            <div className="bar-txt">
                <h1>Create profiles for children.</h1>
                <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                </p>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}
