import { Container,Nav,Navbar } from 'react-bootstrap';
import AddCard from './AddCard';
import {Link} from 'react-router-dom'
function NavbarMovie({film,setFilm}){
    return(

        <div>
            <Container >
                <Navbar bg="dark" variant="dark" style={{paddingLeft : '100px'}}>
                    
                        <Navbar.Brand><img src="./raouaa.PNG" alt='' style={{height : '30px'}} /></Navbar.Brand>
                        <Nav className="me-auto">
            
                            <Link to='/'>Home</Link>
                            <Link to='/Movies'>Movies</Link>
                           
                            
                        </Nav>
                        
                        <AddCard film = {film} setFilm = {setFilm}></AddCard>
                </Navbar>            
            </Container>
        </div>            
    )
}

export default NavbarMovie;