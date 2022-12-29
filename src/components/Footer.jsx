import { Facebook, Instagram, MailOutline, PaymentOutlined, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
display:flex;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;

`

const Logo = styled.h1``

const Desc = styled.p`
margin: 20px 0px;
`

const SocialConatiner = styled.div`
display: flex;
`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`



const Center = styled.div`
flex: 1;
padding: 20px;
`
const Title = styled.ul`
    margin-bottom:30px;
`
const List = styled.li`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.div`
    width: 40%;
    margin-bottom: 10px;
`


const Right = styled.div`
flex: 1;
padding: 20px;
`
const ContactItem = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
`






const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                Roh.
            </Logo>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laborum temporibus numquam, aut minus eveniet recusandae suscipit voluptates sit quos labore itaque rem ratione optio!
            </Desc>
            <SocialConatiner>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialConatiner>
        </Left>
        <Center>
            <Title>
                Useful Links
            </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Acessoreis</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlists</ListItem>
                <ListItem>Wishlists</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>
                343 South distirct, Nashik Road 
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>
                +91 8830949311
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>
                Rohandore@gmail.com
            </ContactItem>
            <ContactItem>
                <PaymentOutlined style={{marginRight:"10px"}}/>
                Payment
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer