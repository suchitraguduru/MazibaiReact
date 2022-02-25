import React from 'react'

function Footer() {
    return (
        <>
            <section className="foot">
                <section className="AAA">
                    <div className="container11">
                        <div className="content11">
                            <div className="left-side">
                                <div className="address details">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="topic">Address</div>
                                    <div className="text-one">Surkhet, NP12</div>
                                    <div className="text-two">Birendranagar 06</div>
                                </div>
                                <div className="phone details">
                                    <i className="fas fa-phone-alt"></i>
                                    <div className="topic">Phone</div>
                                    <div className="text-one">+0098 9893 5647</div>
                                    <div className="text-two">+0096 3434 5678</div>
                                </div>
                                <div className="email details">
                                    <i className="fas fa-envelope"></i>
                                    <div className="topic">Email</div>
                                    <div className="text-one">mazibai@gmail.com</div>
                                    <div className="text-two">info.mazibai@gmail.com</div>
                                </div>
                            </div>
                            <div className="right-side">
                                <div className="topic-text">Send us a message</div>
                                <p>If you have any work from me or any types of quries related to my tutorial, you can send me
                                    message from here. It's my pleasure to help you.</p>
                                <form action="#">
                                    <div className="input-box">
                                        <input type="text" placeholder="Enter your name" />
                                    </div>
                                    <div className="input-box">
                                        <input type="text" placeholder="Enter your email" />
                                    </div>
                                    <div className="input-box message-box">
                                        <textarea placeholder="Enter your message"></textarea>
                                    </div>
                                    <div className="button">
                                        <input type="button" value="Send Now" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>


                <footer>
                    <section className="RRR">
                        <div className="content">
                            <div className="left box">
                                <div className="upper">
                                    <div className="topic">About us</div>
                                    <p>Web supply Our MaiDs accross INDIA this is the first time we are using Online</p>
                                </div>
                                <div className="lower">
                                    <div className="topic">Contact us</div>
                                    <div className="phone">
                                        <a href="#"><i className="fas fa-phone-volume"></i>+007 9089 6767</a>
                                    </div>
                                    <div className="email">
                                        <a href="#"><i className="fas fa-envelope"></i>mazibai@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="middle box">
                                <div className="topic">Our Services</div>
                                <div><a href="#">24/7 Services</a></div>
                                <div><a href="#">Interior Allignment's</a></div>
                                <div><a href="#">Docore Your Home</a></div>
                                <div><a href="#">Dhobi</a></div>
                                <div><a href="#">House Keeping</a></div>
                                <div><a href="#">Professional MaiD's</a></div>
                            </div>
                            <div className="right box">
                                <div className="topic">Your Views About Our Services</div>
                                <form action="#">
                                    <input type="text" placeholder="Write Your Views" />
                                    <input type="submit" name="" value="Send" />
                                    <div className="media-icons">
                                        <div className="fafa"><a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <p className="fafaText"> FACEBOOK </p>
                                        </div>
                                        <div className="fafa"><a href="#"><i className="fab fa-instagram"></i></a>
                                            <p className="fafaText"> FACEBOOK </p>
                                        </div>
                                        <div className="fafa"><a href="#"><i className="fab fa-twitter"></i></a>
                                            <p className="fafaText"> FACEBOOK </p>
                                        </div>
                                        <div className="fafa"><a href="#"><i className="fab fa-youtube"></i></a>
                                            <p className="fafaText"> FACEBOOK </p>
                                        </div>
                                        <div className="fafa"><a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <p className="fafaText"> FACEBOOK </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="bottom">
                            <p>Copyright &#169; 2022 <a href="#">MaziBAi.Com</a> All rights reserved</p>
                        </div>
                </section>
            </footer>
        </section>
    </>
)
}

export default Footer;