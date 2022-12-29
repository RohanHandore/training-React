import { Send } from "@material-ui/icons"
import styled from "styled-components"


const Container = styled.div`
height: 60px;
background-color: #dcdcdc;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 123px;
`

const Title = styled.h1`
font-size: 70px;
margin: 20px;


`
const Desc = styled.div`
font-size:24px;
font-weight:300;
margin: 20px;
`
const ImputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid gray;
`
const Input = styled.input`
border: none;
padding-left: 20px;
flex: 8;

`
const Button = styled.button`
flex: 2;
border: none;
background-color: teal;
color: white;
cursor: pointer;
`

const NewsLetter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Desc>Get Timely Updates from your favorite products.</Desc>
        <ImputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <Send/>
            </Button>
        </ImputContainer>
    </Container>
  )
}

export default NewsLetter