
export default function Price({oldPrice, newPrice}){
    let css = {
        backgroundColor: "#e0c367",
        height: "30px",
        borderBottomLeftRadius: "13px",
        borderBottomRightRadius: "13px",
    }
    let cssOld = {
        textDecorationLine : "Line-through",
    }
    let cssNew= {
        fontWeight: "bold",
    }
    return(
        <div style={css}>
            <span style={cssOld}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp; 
            <span style={cssNew}>{newPrice}</span>
        </div>
    ); 
}