import './styles.css';

import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../products";

export default function Product() {
    const params = useParams();
    const products = getProductsByCategory(params.category);

    return (
        <div className="products-content-container container mt30">
            {
                products.map((item, index) => (
                    <p key={index}>
                        {item}
                    </p>
                ))
            }
        </div>
    );
}