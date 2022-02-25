import React from 'react'

function Navbar() {
    return (
        <>
            <nav>
                <div className="navbar">
                    <i className='bx bx-menu'></i>
                    <div className="logo"><a href="#">MaziBai</a></div>
                    <div className="nav-links">
                        <div className="sidebar-logo">
                            <span className="logo-name">MaziBai</span>
                            <i className='bx bx-x'></i>
                        </div>
                        <ul className="links">
                            <li ><a href="#">HOME</a></li>
                            <li>
                                <a href="#">CUSTOMERS</a>
                            </li>
                            <li>
                                <a href="#services">SERVICES</a>
                            </li>
                            <li><a href="#aboutus">ABOUT US</a></li>
                            <li><a href="#contactus">CONTACT US</a></li>
                            <li><a href="#refer" className="j">Refer a MAID/Bai</a></li>
                            <li><a href="#apply" className="j" id="k">WANT A JOB.?</a></li>
                        </ul>

                        <div className="appearance">
                            <div className="color-icon">
                                <div className="icons">
                                    <i className="fas fa-palette"></i>
                                    <i className="fas fa-sort-down arrow"></i>
                                </div>
                                {/* <div className="color-box">
                                    <div className="color-switchers">
                                        <button className="btn pink active" data-color="#f86d8d #F6416C"></button>
                                        <button className="btn orange" data-color="#b99312 #e7b817"></button>
                                        <button className="btn purple" data-color="#AA14F0 #BC8CF2"></button>
                                        <button className="btn green" data-color="#33df44 #0dac1d"></button>
                                        <button className="btn blue" data-color="#007bff #7b9efd"></button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar