import "./chat.css"
import UploadIcon from '@mui/icons-material/Upload';
import ChatHeader from "./ChatHeader"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from "./Message";
import { selectChannelId, selectChannelName } from "../features/appSlice";
import { selectUser } from "../features/userSlice";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import db from "../firebase";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { collection, doc, onSnapshot } from "firebase/firestore";
function Chat(){
    const user=useSelector(selectUser);
    const channelId=useSelector(selectChannelId);
    const channelName=useSelector(selectChannelName);
    const [input,setInput] = useState("");
    const [messages,setMessages]=useState([]);

    useEffect(()=>{
        if(channelId){
        db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .onSnapshot((snapshot)=>
        setMessages(snapshot.docs.map((doc)=>doc.data()))
        )
        }
    },[channelId])

    const sendMessage=(e)=>{
        e.preventDefault();
        if(user){
        db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: {
                displayname: user.uname,
            },
        })
        setInput("");
    }
    }
    return(
        <div className="chat">
        <ChatHeader channelName={channelName}/>
        <div className="chat_messages">
        {messages.map((message)=>(
        <Message timestamp={message.timestamp} message={message.message} user={message.user}/>
        )) }
        </div>
        <div className="chat_input">
        <UploadIcon fontSize="large"/>
        <form>
            <input value={input} disable={!channelId} onChange={e=>setInput(e.target.value)} placeholder={"Message #" + channelName}/>
            <button className="chat_sendbutton" type="submit" onClick={sendMessage}>Send Message</button>
        </form>
        <div className="chat_inputicons">
        <EmojiEmotionsIcon fontSize="large"/>
        </div>
        </div>
        </div>
    )
}
export default Chat;