import React, { useEffect, useState } from "react";
import Navhome from "../Home/Navhome";
import Aos from "aos";
import 'aos/dist/aos.css';
import './mentor.css';
import Chats, { classname } from "./Chats";
const ChatApplication = () => {
    const [data,setData] = useState();
    const [get,setGet] = useState();
    const [get1,setget1] = useState();


    const funexpr = (event)=>{
        setData(event.target.value);
    }
    const getData = ()=>{
        setGet(data)
        setget1(data)
    }


    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <>
            <Navhome />

            <div data-aos="fade-left">
                <section className="main-homepage-1 d-flex align-items-center overflow-x-hidden">
                    <div className="container-fluid" style={{ marginTop: "1rem" }}>
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="mainchatbox d-flex">
                                    <div className="chat-left-box">
                                        <h1 className="mt-5 home-head">Chat</h1>
                                        <div className="chat-input-search">
                                            <input type="text" placeholder="Search" />
                                            <img src="./Images/search.png" className="img-fluid" />
                                        </div>

                                        <p>Recents</p>

                                        <div className="chat-pro">
                                        <img src="./Images/profile.png" className="img-fluid"/>

                                        <div className="mic dot">
                                        <h2>Michel Smithwick</h2>
                                        <p>.</p>
                                        </div>
                                        
                                        </div>
                                        <div className="conn">
                                        <h2>Hey, Nice to connect with you!</h2>
                                        <p>2h</p>
                                        </div>

                                        <div className="chat-pro chat-pro-1">
                                        <img src="./Images/yourprofileProfile.png" className="img-fluid"/>

                                        <div className="mic">
                                        <h2>Alidia Leaton</h2>
                                        </div>
                                        
                                        </div>
                                        <div className="conn conn-1">
                                        <h2>You: <img src="./Images/gal.png"/> Photo</h2>
                                        <p>2h</p>
                                        </div>


                                    </div>

                                    <div className="chat-right-box">
                                       <div className="chat-right-pro">
                                       <img src="./Images/arrow.png" className="arrow"/>
                                       <img src="./Images/yourprofileProfile.png" className="chat-right-prof"/>
                                       <h1>Alidia Leaton</h1>
                                       </div>
                                       <p className="border-bot"></p>
                                        <div>
                                    <p className="border-bot1"></p>
                                    <p className="border-date">06/12/23</p>
                                    <p className="border-bot2"></p>
    </div>
    
    <div className="chatstart">
<Chats
firstChat = {classname[0].firstChat}
timeChat = {classname[0].timeChat}
time = {classname[0].time}
get = {get}
/>
<Chats
firstChat = {classname[1].firstChat}
timeChat = {classname[1].timeChat}
time = {classname[1].time}
get = {get1}
/>
<Chats
firstChat = {classname[2].firstChat}
timeChat = {classname[2].timeChat}
time = {classname[2].time}
get = {get}
/>
<Chats
firstChat = {classname[3].firstChat}
timeChat = {classname[3].timeChat}
time = {classname[3].time}
get = {get}
/>
<div className="fifth-chat">
<img src="./Images/chatimg.png"/>
</div>
</div>
<p className="chat-end"></p>

<div className="typemess">
<img src="./Images/addbutt.png" className="addbutt"/>
<input onChange={funexpr} placeholder="Type a message..." className="chatinput" />
<img src="./Images/mic.png" className="mic"/>
</div>
<button onClick={getData} className="btn bg-primary">click me</button>
                                    </div>

                                   





                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default ChatApplication;

