import './styles.css';

import { NavLink } from "react-router-dom";
import { getProducts } from "../../routes/Home/Products/products";

const products = getProducts();

export default function ProductsHeader() {
    return (
        <header className='product-header container mt30'>
            <div>
                <nav className='nav-content-container'>
                    {
                        products.map((product) => (
                            <NavLink
                                className={({isActive}) => isActive ? "menu-active" : ""}
                                style={{ display: "block", margin: "1rem" }}
                                to={`/products/${product.category}`}
                                key={product.id}
                            >
                                {product.name}
                            </NavLink>
                        ))
                    }
                </nav>
            </div>
        </header>
    );
}