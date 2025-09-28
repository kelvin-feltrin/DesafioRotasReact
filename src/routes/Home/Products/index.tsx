import { Outlet } from "react-router-dom";
import ProductsHeader from "../../../components/ProductsHeader";

export default function Products() {
    return (
        <>
            <ProductsHeader />
            <Outlet />
        </>
    );
}