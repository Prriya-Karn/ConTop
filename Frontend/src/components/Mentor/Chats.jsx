import React from "react";
const classname = [
    {
        firstChat : "firstchat",
        timeChat : "time-chat",
        time : "8:23am"
    },

    {
        secondChat : "secondchat",
        timeChat : "time-chat",
        time : "8:23am"
    },
    {
        thirdChat : "thirdchat firstchat",
        timeChat : "time-chat",
        time : "8:23am"
    },
    {
        fourthChat : "fourthchat",
        timeChat : "time-chat",
        time : "8:23am"
    }
]
const Chats = (props) => {
    return (
        <>
        
            <div className={props.firstChat}>
                <p>{props.get}</p>
                <p className={props.timeChat}>{props.time}</p>
            </div>
        
            
        </>
    )
}

export default Chats;
export {classname};