 import react from "react"
import styled from "styled-components"

 const Button = ()=>{
    return(
        <div>
            <Container>
                <Main>
                    Button
                </Main>
            </Container>
        </div>
    )
 }

 export default Button

 const Container = styled.div`
 display: flex;;
 justify-content: center;
 align-items: center;
 width: 200px;
 height: 60px;
 /* background-color: red; */
 border: 1px solid silver;
 border-radius: 3px;
 `
 const Main = styled.div``