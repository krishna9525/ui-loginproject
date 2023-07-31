import React from "react"
import "./Navbar.css"


const Navbar = () => {
    return (
        <div >


            <nav className="container">
                <div className="logo_img">
                    <h3>Razor</h3>
                </div>

                {/* **********************2nd************ */}

                <div className="component">
                    <ul>
                        <li>Sign up</li>
                        <li className="active">Request Demo</li>
                    </ul>

                </div>

            </nav>






        </div>
    )
}

export default Navbar;