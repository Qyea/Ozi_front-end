import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Timer from "../../assets/5.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {

    const { currentUser } = useContext(AuthContext);
    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user"> 
                        <img 
                        src={currentUser.profilePic} 
                        alt=""
                        />
                        <span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt="" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Messages} alt="" />
                        <span>Messages</span>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt="" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Videos} alt="" />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Timer} alt="" />
                        <span>Timer</span>
                    </div>
            </div>
            
          </div>
        </div>
    );
  };

export default LeftBar;