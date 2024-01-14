import "./navbar.scss";
const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="log image"/>
                <span>DashBoard</span>
            </div>
            <div className="icons">
        <img src="/search.svg" alt="" className="icons"/>
        <img src="/app.svg" alt="" className="icons"/>
        <img src="/expand.svg" alt="" className="icons"/>
        <div className="notification">
        <img src="/notifications.svg" alt="" className="icons"/>
        <span>1</span>
        </div>
        <div className="user">
        <img src="/khalid.jpg" alt="" className="icons"/>
        <span>Khalid</span>
        </div>
        <div className="setting">
        <img src="/settings.svg" alt="" className="icons"/>
        </div>
        
            </div>
        </div>
    )
}
export default Navbar;