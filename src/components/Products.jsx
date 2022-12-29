import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
const Contariner = styled.div`
    padding:20px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
    return (
        <Contariner>
            {popularProducts.map(item => (
                <Product item={item} key={item.id} />

            ))}
        </Contariner>
    )
}

export default Products