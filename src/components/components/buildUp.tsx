import styled from "styled-components"
import video from "../../Asset/shoevid.mp4"
import image from "../../Asset/allstars.jpg"
const BuildUp = ()=>{
    return(
        <Container>
           <Main>
            <Thing>
            <Hover>
                <Image>
                    <Img src ={image}/>
                    <Vid src ={video} autoPlay loop playsInline/>
                </Image>
            </Hover>
            </Thing>
            </Main> 
        </Container>
    )
}

export default BuildUp

const Img = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
z-index: 2;

:hover{
    display: none;
}

`
const Vid = styled.video`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;

:hover{
    display: none;
}
`
const Thing = styled.div`
margin: 20px 40px;
display: flex;
justify-content: center;
align-items: center;
`
const Image = styled.div`
width: 300px;
height: 400px;
background-color: #bcbcbc;
transition: all 360ms;
position: relative;
z-index: 1;
`
const Hover = styled.div`
width: 300px;
height: 400px;
background-color:grey ;
position: relative;
transition: all 360ms;

::before,
    ::after{
        content:"";
        position: absolute;
        display: inline-block;
        transition: all 360ms;
        width: 10px;
        height: 10px;
        background-color:grey ;
    }

    ::before{
        top: 0;
        left: 0;
        transform-origin: top left;
        transform: scale(0);
    }
    ::after{
        bottom: 0;
        right: 0;
        transform-origin: bottom right;
        transform: scale(0);
    }

:hover ${Image}{
    transform: translate(8px, -8px);
}

:hover::before{
    transform: rotate(-45deg) scale(1);
}
:hover::after{
    transform: rotate(45deg) scale(1);
}
`
const Container = styled.div`
width: 100%;
height: 87vh;
background-color: black;
position: relative;
`
const Main = styled.div`
position: absolute;
background: radial-gradient(
    rgba(225,225,225,0.2 ) 8%,
    transparent 2%
);
background-position: 0% 0%;
background-size: 5vmin 5vmin;
width: 100%;
height: 100%;
` 