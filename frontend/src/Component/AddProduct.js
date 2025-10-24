import axios from "axios";
import { useState } from "react";

const AddProduct = ()=>{
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");

    const handleAddProduct = async()=>{
        let userDetail = localStorage.getItem("User");
        userDetail = JSON.parse(userDetail);
        try{
            const resp = await axios.post("http://localhost:8080/add-product",{
                name,
                price,
                brand,
                category,
                addedBy : userDetail.email
            });
            console.log("resp",resp);
            if(resp.status === 200){
                window.alert("Product Added Successfully!");
                setName("");
                setBrand("");
                setCategory("");
                setPrice("");
            }else{
                window.alert("Oops! Something Went Wrong");
            }
        }
        catch(err){

        }

    }
    return(
        <>
            <h1 style={{marginTop: "100px", fontStyle: "italic", marginLeft: "40%"}}>Add Product....!</h1>
            <div style={{marginTop: "35px", marginLeft:"60px"}} className="SignUp">
                <input type="text" placeholder="Enter Product Name" value={name} onChange={e=>setName(e.target.value)}/>
                <input type="text" placeholder="Enter Product Price" value={price} onChange={e=>setPrice(e.target.value)}/>
                <input type="text" placeholder="Enter Product Brand" value={brand} onChange={e=>setBrand(e.target.value)}/>
                <input type="text" placeholder="Enter Product Category" value={category} onChange={e=>setCategory(e.target.value)}/>
                <button type="button" onClick={handleAddProduct}>Add</button>
        </div>
        </>
    )
}

export default AddProduct;