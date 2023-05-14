import "./profile.scss"
import Posts from "../../components/posts/Posts"

const Profile = () => {
    return (
      <div className="profile">
        <div className="images">
          <img
            src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="cover"
          />
          <img
            src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            className="profilePic"
          />
        </div>
        <div className="profileContainer">
          <div className="uInfo">
            <div className="left">
              <p>I love Ozi!</p>
            </div>
            <div className="center">
              <span>Krech Anastasia</span>
              <div className="info">
                <div className="item">
                  
                  <span>Belarus</span>
                </div>
                <div className="item">
                  
                  <span>front-end lover</span>
                </div>
              </div>
              <button>follow</button>
            </div>
            <div className="right">
            
            </div>
          </div>
        <Posts />
        </div>
      </div>
    );
  };

export default Profile;