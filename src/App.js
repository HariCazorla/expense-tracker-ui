import {Navbar, Container, Button} from "react-bootstrap";
function App() {
  return (
    <>
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="#home">Something cool</Navbar.Brand>
      </Container>
    </Navbar>
<br/>
    <Container>
       <Button variant="primary" onClick={()=>alert("You a tapin merchant 🥶")}>Click to know your future</Button>
    </Container>
    </>
  );
}

export default App;
