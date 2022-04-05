import { Avatar } from "@mui/material";
import "./Message.css";

function Message({timestamp,user,message}){
    return(
        <div className="message">
            <Avatar className="avatar"/>
            <div className="message_info">
            <p></p>
                <h4 className="message_head">{user.displayname}
                    <span className="message_timestamp">timestamp</span>
                    </h4>
                <p>{message}</p>
            </div>
            
        </div>
    );
}

export default Message;