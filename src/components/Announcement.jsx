import styled from "styled-components"

const Container =styled.div`
    height:30px;
    background-color: teal;
    color:white;
    display:felx;
    align-items :center;
    justify-content: center;
    font-size : 14px;
    font-weight: 100px;
`
export const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping at Your Home!.. Over purchace of 500Rs.
    </Container>
)
}
export default Announcement