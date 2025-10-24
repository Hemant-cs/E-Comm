// /Users/hemantcs/Desktop/study/code/E-Comm/frontend/src/Component/Home.js
import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
    const [allProduct, setAllProduct] = useState([]);

    const handleFetch = async () => {
        try {
            const allProductGet = await axios.get("http://localhost:8080/");
            setAllProduct(allProductGet.data);
            console.log(allProductGet.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <>
            <h1 className="home-title">Welcome to ShopEase</h1>

            <div className="products-grid">
                {allProduct.length === 0 && <p className="empty">No products available.</p>}
                {allProduct.map((p, idx) => {
                    const id = p._id || p.id || idx;
                    return (
                        <div className="product-card" key={id}>
                            <div className="product-header">
                                <div className="product-name">Product Name : {p.name || "Unnamed product"}</div>
                                <div className="product-brand">Product Brand : {p.brand || "Unknown brand"}</div>
                            </div>

                            <div className="product-fields">
                                <div className="field-row">
                                    <span className="label"> Product Category : </span>
                                    <span className="value">{p.category || "—"}</span>
                                </div>

                                <div className="field-row">
                                    <span className="label">Price</span>
                                    <span className="value price">
                                        Product Price : {typeof p.price === "number" ? `${p.price.toFixed(2)}₹` : p.price || "—"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Home;