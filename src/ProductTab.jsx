import Product from "./Product.jsx" ; 

function ProductTab(){
 // stylesheet variable for PRODUCT TAB 
    let styles = {
        display:"flex",
        flexWrap: "wrap",
        justifyContent: "center", 
        alignItems: "center",
    }
    return(
        <div style={styles}>
            <Product title="Product 01" idx={0} />
            <Product title="Product 02" idx={1} />
            <Product title="Product 03" idx={2} />
            <Product title="Product 04" idx={3} />
        </div>
    ) 
}

export default ProductTab ; 