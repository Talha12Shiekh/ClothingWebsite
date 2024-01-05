import React,{useRef, useState} from "react";
import ProductsFilter from "./ProductsFilter";
import "bootstrap";
import SingleProduct from "./SingleProduct";
import {PRODUCTS} from "../data/Data";
import {motion} from "framer-motion"
import NavigationShowing from "./NavigationShowing";
import Modal from "./Modal";

const Products = () => {

    const [products,setproducts] = useState([...PRODUCTS]);

    const [showDialog,setshowDialog] = useState(false);

    const [dialogImage,setDialogImage] = useState("");

    const ModalRef = useRef(null);

    return (
        <>
        <Modal ref={ModalRef} dialogImage={dialogImage} active={showDialog} setactive={setshowDialog}/>

        <div className="px-5 my-5">
            <ProductsFilter products={products} setproducts={setproducts}/>
            <motion.div layout className="row mt-5">
            {
                products.map(product => {
                    return <SingleProduct {...product} key={product.key} setDialogImage={setDialogImage} setshowDialog={setshowDialog}/>
                })
            }
            </motion.div>
        </div>
        </>
    )
}

export default Products;