import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import {mobile} from "../responsive";

const Container = styled.div`
width: 100;
height: 100vh;
display: flex;
position:relative;
overflow: hidden;
${mobile({dispaly:"none"})}
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
`
const Slider = () => {
  return (
    <Container>
    <Arrow>
<ArrowLeftOutlined />
    </Arrow>
    <Container>
    <Arrow>
<ArrowRightOutlined />
    </Arrow>
    </Container>
  )
}

export default Slider