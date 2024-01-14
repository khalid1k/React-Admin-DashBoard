import Single from "../single/single";
import "./singleProduct.scss";
import { singleProduct } from "../../data";
const SingleProduct=()=>{
    return(
        <div className="singleProduct">
            <Single {...singleProduct}/>
        </div>
    )
}
export default SingleProduct;