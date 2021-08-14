import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>

                </div>
                
                <form className="settingsForm">
                    <label >Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="http://ttgasia.2017.ttgasia.com/wp-content/uploads/sites/2/2020/09/Hiker-enjoys-the-view-in-the-Himalayan-mountains.jpg" 
                            alt="" 
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label > Username</label>
                    <input type="text" placeholder="Sabbir" />
                    <label > Email</label>
                    <input type="text" placeholder="sabbir@gmail.com" />
                    <label > Password</label>
                    <input type="password"  />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
