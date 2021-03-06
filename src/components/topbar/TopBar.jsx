import { Link } from "react-router-dom";
import './topbar.css';


export default function TopBar() {
    const user = false;
    return (
        <div className="top">
             <div className="topLeft">
                 <i className="topIcon fab fa-facebook-square"></i>
                 <i className="topIcon fab fa-twitter-square"></i>
                 <i className="topIcon fab fa-pinterest-square"></i>
                 <i className="topIcon fab fa-instagram-square"></i>
                 </div>
             <div className="topCenter">
                 <ul className="topList">
                     <li  className= "topListItem">
                        <Link className="link" to="/"  >HOME</Link> 
                         </li>
                     <li  className= "topListItem"><Link className="link" to="/about" >ABOUT</Link> </li>
                     <li  className= "topListItem"><Link className="link" to="/contant" >CONTACT</Link></li>
                     <li  className= "topListItem"><Link className="link" to="/contant" >WRITE</Link></li>
                     <li  className= "topListItem">
                         { user && "LOGOUT"}
                     </li>
                 </ul>


             </div>
             <div className="topRight">
                 {
                     user ? (
                        <img
                    className="topImg"
                    src= "data:image/jpeg;base64,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"
                    alt =""
                 />
                     ) : (
                         <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login" >LOGIN</Link>
                            </li>
                            <li className="topListItem">
                            <Link className="link" to="/register" >REGISTER</Link>
                            </li>
                        </ul>
                     )
                 }
                 
                 <i className="searchIcon fas fa-search"></i>
             </div>
        </div>
    )
}
