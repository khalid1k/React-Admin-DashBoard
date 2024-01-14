import "./singleUser.scss";
import {singleUser} from "../../data";
import Single from "../single/single";
const SingleUser=()=>{
    return(
        <div className="singleuser">
            <Single {...singleUser}/>
        </div>
    )
}
export default SingleUser;
 