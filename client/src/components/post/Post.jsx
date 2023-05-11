import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false);
  
    //TEMPORARY
    const liked = false;
  
    return (
      <div className="post">
        <div className="container">
          <div className="user">
            <div className="userInfo">
              <img src={post.profilePic} alt="" />
              <div className="details">
                <Link
                  to={`/profile/${post.userId}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="name">{post.name}</span>
                </Link>
                <span className="date">1 min ago</span>
              </div>
            </div>
            
          </div>
          <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt="" />
          </div>
          <div className="info">
            <div className="item">
             
              12 Likes
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
              
              12 Comments
            </div>
            <div className="item">
             
              Share
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Post;