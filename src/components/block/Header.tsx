import styled from "styled-components";
import {AiOutlineMenu} from "react-icons/ai"

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <LinkData>
            <MyLink>Product</MyLink>
            <MyLink>project</MyLink>
          </LinkData>
          <Image>Image</Image>
          <LinkData>
            <MyLink>About</MyLink>
            <MyLink>Contact</MyLink>
          </LinkData>
        </Main>
        <Main2>
          <Image>Image</Image>
          <LinkData>
          <MyLink>Product</MyLink>
            <MyLink>project</MyLink>
            <MyLink>About</MyLink>
            <MyLink>Contact</MyLink>
          </LinkData>
          <Icon/>
           </Main2>
      </Container>
    </div>
  );
};
export default Header;

const Icon = styled(AiOutlineMenu)`
display: none;

@media screen and (max-width:500px) {
    display: block;
    color: white;
    font-size: 30px;
    margin-right: 20px;
    }
`
const Container = styled.div`
width: 100%;
height: 90px;
background-color: black;
color: white;
display: flex;
justify-content: center;
`; 
const Main2 = styled.div`
display: none;
color: white;

@media screen and (max-width:900px){
    display: flex;
    /* background-color: red; */
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
} 
`;
const Main = styled.div`
/* background-color: blue; */
min-width: 900px;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width:900px){
  display: none;
}
`;
const LinkData = styled.div`
display: flex;

@media screen and (max-width:500px){
    display: none;
    color: white;
    width: 100%;
    height: 100%;  
    justify-content: space-between;
    align-items: center;
}  
`;
const MyLink = styled.div`
margin: 0 10px;
`;
const Image = styled.div`
font-weight: 900;
font-size: 30px;
padding: 0 10px;
`;
