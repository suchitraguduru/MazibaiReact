import React from 'react'
import HomeGirl from '../images/home_girl.png'
import HomeShape from '../images/home_shape.png'
import {useNavigate , Link} from 'react-router-dom'
function HomeContent() {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/auth'); 
    }
    return (
        <>
            <div className="wilson">
                <div className="text-content">
                    <div className="text">MaziBai.Com welcomes You.....................!</div>
                    <div className="job">We Provide </div>
                    <div className="typing-text">
                        <p>Customised, Persnolised, Home Services.</p>
                    </div>
                </div>

                <div className="banner-text">
                    <h1>MaziBai.Com</h1>
                    <p>Redefing Home Services </p>
                    <div className="banner-btn">
                        <Link to={'/auth'} onClick={goToLogin} >LOGIN</Link>
                    </div>
                </div>


                <div className="images">
                    <img src={HomeShape} className="shape" />
                    <img src={HomeGirl} className="girl" />
                </div>
            </div>
        </>
    )
}

export default HomeContent