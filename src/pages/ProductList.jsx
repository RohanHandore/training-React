import styled from "styled-components"
import NavBar from "../components/NavBar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import { mobile } from "../Responsive"
import { useLocation } from "react-router-dom"
import { useState } from "react"

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width:"0px 20px", display:"flex",flexDirection:"column"})}

`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin: 20px;

`
const Select = styled.select`
    padding: 10px;
    margin: 20px;
`
const Option = styled.option`
    
`

const ProductList = () => {
    const locaton = useLocation()
    const cat =locaton.pathname.split("/")[2]
    const [filter,setFilters]=useState({})
    const handleFilters = (e) =>{
        const value= e.target.value;
        setFilters({
            [e.target.name]:value,
        })

        console.log(filter)
    }
    return (
        <Container>
            <NavBar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <Select name="color" onSelect={handleFilters}>
                        <Option disabled >Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onSelect={handleFilters}>
                        <Option disabled >Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price(asc)</Option>
                        <Option>Price(dec)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />

        </Container>
    )
}

export default ProductList