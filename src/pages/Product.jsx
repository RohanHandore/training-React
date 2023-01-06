import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import NewsLetter from "../components/NewsLetter"
import { mobile } from "../Responsive"

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding:"10px",flexDirection:"column"})}

`

const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height:"40vh"})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding:"10px"})}
`

const Title = styled.h1`
    font-weight: 300;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.span`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width:"80%"})}
`

const Filter = styled.span`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOptions = styled.option`
    
`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width:"80%"})}
`

const AmmountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    cursor: pointer;
    padding: 15px;
    border: 1px solid teal  ;
    background-color: white;
    &:hover{
        background-color: #979696;
    }
`


const Product = () => {
    return (
        <Container>
            <NavBar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="http://bitly.ws/yhnJ" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Nike Shoe</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fuga dolore earum, nobis iusto quibusdam molestiae recusandae voluptatem nihil iure expedita obcaecati ut dolor nisi.</Desc>
                    <Price>Rs.5500</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOptions>XS</FilterSizeOptions>
                                <FilterSizeOptions>S</FilterSizeOptions>
                                <FilterSizeOptions>M</FilterSizeOptions>
                                <FilterSizeOptions>L</FilterSizeOptions>
                                <FilterSizeOptions>XL</FilterSizeOptions>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />

        </Container>
    )
}

export default Product