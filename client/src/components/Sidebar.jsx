import "./sidebar.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from "./SidebarChannel";
import { useState,useEffect } from "react";
import db from "../firebase";
import firebase from 'firebase/app';
import { collection, doc, onSnapshot } from "firebase/firestore";

function Sidebar(){
    const [channels,setChannels]=useState([]);
    useEffect(()=>{ 
        db.collection("channels").onSnapshot((snapshot)=>
            setChannels(
            snapshot.docs.map((doc)=>({
            id: doc.id,
            channel: doc.data(),
        }))
        )
        );   
},[]);

const handleAddChannel=()=>{
  const ChannelName=prompt("Enter name of the channel"); 
  if(ChannelName){
      db.collection("channels").add({
          channelName: ChannelName,
      })
  } 
};
    return(
    <div className="sidebar">
        <div className="sidebar_top">
          <h3>Communities</h3>
          <ExpandMoreIcon/>
        </div>
        <div className="sidebar_channel">
            <div className="sidebar_channelheader">
                <div className="sidebar_header">
                    <ExpandMoreIcon/>
                    <h4>Text Channels</h4>
                </div>
                <AddIcon className="sidebar_addChannel" onClick={handleAddChannel}/>
            </div>
            <div className="sidebar_channellist">
            {channels.map(({id,channel})=>(
                <SidebarChannel key={id} id={id} channel={channel.channelName}/>
            ))}

        </div>
        </div>
    </div>
    )

}

export default Sidebar