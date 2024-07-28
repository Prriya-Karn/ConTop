import React from "react";
import { NavLink } from "react-router-dom";
const LikeComment = ()=>{
    return(
        <>
        <div  data-aos="fade-left">
        <div className="likecommentsection">
        <div className="YourProfile-Profile">
            <img src="./Images/profile.png" />
            <h3>Fancie Juhnke</h3>
        </div>
        <div className="yourprofile-p">
            <p>Masters in Artificial Intelligence | University of Galway, Ireland</p>

        </div>
        <div className="your-profile-desc">
            <p>Lorem ipsum dolor sit amet consectetur.
                Egestas bibendum vestibulum dolor facilisis
                odio augue pretium nam. Morbi accumsan risus enim faucibus.
                Aliquet nisi sed in feugiat nunc posuere id fringilla. <NavLink className="yourProfile-navlink">#ConnectOp</NavLink></p>
        </div>

        <div className="your-profile-image">
            <img src="./Images/Technology.png" className="img-fluid" />
        </div>

        <div className="your-profile-like">
        <p className="like-pro">Liked by Priya and 60 others</p>
        <p className="com-pro">2 comments</p>
        </div>
        

      <div className="sigLike  d-flex">
      <div className="likebutton  d-flex" style={{gap:"1rem"}}>
      <img src="./Images/like.png"/>
      <p>Like</p>
      </div>
      <div className="comment d-flex">
      <img src="./Images/comment.png"/>
      <p>Comment</p>
      </div>
      <div className="share  d-flex">
      <img src="./Images/share.png"/>
      <p>Share</p>
      </div>
      </div>
        
    </div>
    </div>
        </>
    )
}

export default LikeComment;