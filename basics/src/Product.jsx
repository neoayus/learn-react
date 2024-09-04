import Price from "./Price.jsx" ; 
import "./Product.css" ; 

function Product({title, idx}){
 // array for old and new price . 
    let oldPrices = ["12,495", "11,900", "1,599", "599"] ; 
    let newPrices =  ["8,999", "9,199", "899", "278"] ;
 // array for description. 
    let desc = [
        ["-description 01", "-description 02"],
        ["-description 01", "-description 02"],
        ["-description 01", "-description 02"],
        ["-description 01", "-description 02"],
    ] ; 
    return(
        <div className="Product">
            <h4> {title} </h4>
            <p>{desc[idx][0]}</p>
            <p>{desc[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    ); 
}
export default Product ; 