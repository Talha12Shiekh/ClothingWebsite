import React,{useState} from "react";
import ProductsFilter from "./ProductsFilter";
import "bootstrap";
import SingleProduct from "./SingleProduct";
import {PRODUCTS} from "../data/Data";
import {motion} from "framer-motion"
import NavigationShowing from "./NavigationShowing";

const Products = () => {

    const [products,setproducts] = useState([...PRODUCTS]);

    return (
        <div className="px-5 my-5">
            <ProductsFilter products={products} setproducts={setproducts}/>
            <motion.div layout className="row mt-5">
            {
                products.map(product => {
                    return <SingleProduct {...product} key={product.key}/>
                })
            }
            </motion.div>
        </div>
    )
}

export default Products;