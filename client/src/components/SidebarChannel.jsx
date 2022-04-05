import "./SidebarChannel.css";
import {useDispatch} from "react-redux";
import {setChannelInfo} from "../features/appSlice"
function SidebarChannel({id,channel}){
    const dispatch=useDispatch();
    return(
        <div className="sidebarChannel" onClick={()=>
        dispatch(
            setChannelInfo({
                channelId: id,
                channelName: channel,
            })
        )
        }>
        <h4><span className="sidebarChannel_hash">#</span>{channel}</h4>
        </div>
    )
}
export default SidebarChannel;