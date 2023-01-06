import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { mobile } from "../Responsive"

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding:"10px"})}
`

const Title = styled.div`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`


const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
        ${mobile({ display:"none"})}

`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection:"column"})}


`


const Info = styled.div`
    flex :3;
`

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection:"column"})}
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span`

`

const ProductID = styled.span`
    
`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`

const ProductSize = styled.span`
    
`

const ProductAmountContainer = styled.span`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.span`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice = styled.span`
    font: 30px;
    font-weight: 200;
    ${mobile({ marginBottom:"10px"})}

`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 3px;
`

const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type == "total"&&"500"};
    font-size: ${props=>props.type == "total"&&"24px"};
`
const SummaryText = styled.span``
const SummaryPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`


const Cart = () => {
    return (
        <Container>
            <NavBar />
            <Announcement />
            <Wrapper>
                <Title>Your Badge</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Badge(2)</TopText>
                        <TopText>Your whishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Check Out Now!</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="http://bitly.ws/yniD"/>
                                <Details>
                                    <ProductName><b>Product</b>jessey Thunder shoes!</ProductName>
                                    <ProductID><b>ID</b>93825453534534</ProductID>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size</b>37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$454</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="http://bitly.ws/yniD"/>
                                <Details>
                                    <ProductName><b>Product</b>jessey Thunder shoes!</ProductName>
                                    <ProductID><b>ID</b>93825453534534</ProductID>
                                    <ProductColor color="red"/>
                                    <ProductSize><b>Size</b>37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$454</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryText>SUBTOTAL</SummaryText>
                            <SummaryPrice>$80</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryText>Estimeted shipping</SummaryText>
                            <SummaryPrice>$5.0</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryText>Shipping Discount</SummaryText>
                            <SummaryPrice>$80</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryText>TOTAL</SummaryText>
                            <SummaryPrice>$80</SummaryPrice>
                        </SummaryItem>
                        <Button>Check Out</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart