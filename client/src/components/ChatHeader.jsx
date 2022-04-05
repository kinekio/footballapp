import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SearchIcon from '@mui/icons-material/Search';
import "./ChatHeader.css";
import { useHistory } from "react-router";
function ChatHeader({channelName}){
    let history=useHistory();
    return(
        <div className="chatheader">
        <div className="chatheader_left">
        <h3>
            <span className="chatheader_hash">#</span>{channelName}
        </h3>
        
        </div>
        <div className="chatheader_right">
        <h3 className="backbutton" onClick={e=>history.push("/home")}>Back</h3>
        <NotificationsIcon/>
        <PeopleOutlineIcon/>
        <div className="chatheader_search">
        <input placeholder="Search"></input>
        <SearchIcon/>
        </div>
        </div>
        </div>
    )
}
export default ChatHeader;