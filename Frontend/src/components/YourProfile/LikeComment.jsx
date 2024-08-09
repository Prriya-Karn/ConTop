import React from "react";
import { NavLink } from "react-router-dom";
const LikeComment = ({subPost,src})=>{
    return(
        <>
        <div>
        <div className="likecommentsection">
        <div className="YourProfile-Profile">
            <img alt="" src="./Images/profile.png" />
            <h3>Fancie Juhnke</h3>
        </div>
        <div className="yourprofile-p">
            <p>Masters in Artificial Intelligence |
             University of Galway, Ireland</p>

        </div>
        <div className="your-profile-desc">
        {
            subPost?<p>{subPost}
            <NavLink to="/" className="yourProfile-navlink">#ConnectOp</NavLink>
            </p>:""
        }
            
        </div>

        <div className="your-profile-image">
            <img alt="" src={
                (src)?URL.createObjectURL(src):""
            } className="img-fluid" />
        </div>

        <div className="your-profile-like">
        <p className="like-pro">Liked by Priya and 60 others</p>
        <p className="com-pro">2 comments</p>
        </div>
        

      <div className="sigLike  d-flex">
      <div className="likebutton  d-flex" style={{gap:"1rem"}}>
      <img alt="" src="./Images/like.png"/>
      <p>Like</p>
      </div>
      <div className="comment d-flex">
      <img alt="" src="./Images/comment.png"/>
      <p>Comment</p>
      </div>
      <div className="share  d-flex">
      <img alt="" src="./Images/share.png"/>
      <p>Share</p>
      </div>
      </div>
        
    </div>
    </div>
        </>
    )
}

export default LikeComment;