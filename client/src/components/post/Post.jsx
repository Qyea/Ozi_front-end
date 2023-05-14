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
            {liked ? <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZNJREFUSEvN1s1VwkAQB/D5c/EoKwWoHWAHWIFsBcJFyUmsQKgAPeXhBaxg7UA6kBJoAFePXhzfCpF8sxuSB7nkvWQyv8xmZ15AezqwJ5cOG1a+PjMrIz2xyFsh2ziTI7Ni5esWwA9E1CSi+hr8JKIZM56kJ2bm2jrujohasbg513Avb8Q87WVTYeUvBwAMmnmA+NHcZEI/Nw4YXN2KYTwmASt/OQVwXe6m42m71+iGc0Zg5esOwJNy0VU2ZnSlJ6ZB7gj8Ov5YENNpFTARLdq9k/MErJ51Ez/8XhG6qrqGi2Cz/VesxroP5lGlcGi5N7DFTt71pZh5KL3GINLHaqzbYFa7Js97nhmXQf9vKp7oOr5ZVwofQciuMEMoOrmq6eGgnfhFeo1OajuZWQuwGXHHJVf+xYxmeNanTK6/Gf1WJhz+tqkVBxfLnGDxiZULm5tl4FloYnPFl3cXPA/dChetfBtqBbviNqg1bIvbok7wNtwFdYazcFe0EBzHi6CF4QA35/DvjMu0O+wfepdKbGP3VvEvERTGH7yi67wAAAAASUVORK5CYII="/> : <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAidJREFUSEvNls9500AQxd/zxdyI4gIwFWA6cCqIVAHxBawTpgKcCiAnYS4xFcgd4A4IHbiBROSGLxq+XUvRevXHWjnfZ/YoPc1v5+3MaIkTLZ6Ii/8bHEfJUDkThN6myaG2OhWjNuM4SsakfAYwAnCWAf8AWIvwJgi9tXqW6T4CGFu6O+nxU/Deu6vabCU4ju7nJBW0dhHyVb0UcNaoI+eXH7xrW1MCx9H9kuS7TPgokCXY09lB0jHBKwAvrUC5bncUaToi6Rc6WfrTwcT8Zg8cR8kVKbfZGfxO+xwHE0/Z+7Ti2+Sst5W1AG9cdCKcBKG3zAPtgVeLhw0ErwA8Sp9DG5p/pOD4m2qr8aI3a9JxK8oF5dDGn56/LoHj78mIqfzSjlq7azrDQ+9MF6XHt3mxPWUcL5IZRb5osCE4FPjQ+7qECrBRydKnV2ffIZD9Xh0Lt5LsnJTrIBzMs9rYSeNF4lMkzqy+yPvUFVQC7+bBTztukbGxMwArf3oeHAvVCX17WBG41GDDSaudih5+jgLbKyyRH0E4UDNAL7uPh6SoEacHxDFwE6rbUzgyZ33F5CrOpCvcgqoESjVTM6uLCeYKr4DuTaxKq81iahug6zeNFwEXuIu2VFxV7dMmYBuNHbvV1acpcBdoq4zznVYBdIDsN+pahK0yroOb9rn2vBNYj0DjspCDXaFOVte1TRdoZ3CWeasrb92Pxtnq5/hjHZXxsRs4Wcb/AB1YYS6N4NN3AAAAAElFTkSuQmCC"/>}
            
              12 Likes
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASlJREFUSEvtlkFSwkAQRf/PwrBk8AIegSPgCczcADaW2XkD4wlwF2WjNwBPIN4Ab8AFILDERdpKNGaAVFnAxGxmVlNT1f26e7pnPtHQYkNcbIHHz0nb+8QVgAvLAc3TM7zqgVoVfn/BGZQbeQPQtQwt3M3E52UBL8FPyS1FhjVBc7ciHOhQvWT7EhwvIpJ32WFw07F695PHpXyD5V6H55EDu1Jba3DXXG6c3Di5cTq6Agc/IOM46ZP5H90+mmoY/vkfi0/FTToE2LcB/HkwPlKfvX0FYggBADNDAq1F5OG0ALw5WphUa65tcM6h4D1tMTANTgugtK6UPrsyxRbM9FMFXosw0KGa1gHcl7fxIvLAXl2l3U2izHiUdPW1yprqX5ZVGXtIxI2BvwACHhMu2zp9bAAAAABJRU5ErkJggg=="/>
              12 Comments
            </div>
            <div className="item">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAiZJREFUSEvtlcF100AQhv9/eY8ckZwCSAeICpArsFUBzgWsE04FOBUAJxEuMRUorgDRgaiApIBE5pYcouGtIsWyvJbXMcGP99BVs/vN/DszP7Gjjzvi4t8Bx1HmB6GbbKuUdcXxaebwRr4B8ATyKRjuj7aBW4HrUA2j4Hsv7PiPCm5C/wrYBH108JK8wA8NFeAFgFT22A0O3dlD5Ta+sQma79FX13ImxKsGLCGZ5MQ0eOOmtoksgVdBdXVxdDkh+brl8pTkx95b9+u6BBbAbdDqovhL5uEWDhQ8SH6gQL+Uv85KRPGoTYF7sA10VRVxlB0A+YCknu1nZdxMhEdB6E5M5+bgk2xEkQ9FEHEhT+lt2jw6edzkY4LvKpgID03wOTjKfLLYTMW36sC6t9P/45OsTxFdqa5+JordpuyLbxxlA1JO/wh88a60P+y8rCe93NUtcG0QpLwvL9ArU5vFjGRKQXqrcFGvLP58dUagVyrYrZuLeY5XwKfRVWKY46b65yTHeqR005Hys1w802DY6VfBK00iNsAVZFCCfwmQKIFTNqNjHCnhsYKMq2T7w849r9WdmnAtKwDH5E5FR1+jX0uuKq4405R7rS0a4GttsegFJRMIntffoT4pa8HFeDRkt/Xj5ooVkeMg3B/frQrLrw63Bd8lPd/vDwJXi0HlMsqfcLSJE8XR5RikB+EoCN3zjSq2FMY6zFpq6xstA/+DLYXaPmxnUv8GqBs7LoVK3fMAAAAASUVORK5CYII="/>
              Share
            </div>
          </div>
          {commentOpen && <Comments/>}
        </div>
      </div>
    );
  };

export default Post;