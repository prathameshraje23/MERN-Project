import React from "react"
import "./homepage.css"
//import Homeheader from "../homeheader/homeheader"

const Homepage = ({ setLoginUser }) => {
    return (
        <>
        {/* <Homeheader /> */}
        <div className="homepage">
            <h1>Hello Homepage</h1>
            <div className="button" onClick={() => setLoginUser({})}>Logout</div>
        </div>
        </>
    )
}

export default Homepage