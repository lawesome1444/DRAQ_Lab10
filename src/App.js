//Importing CSS and the components (like Read and Create)
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Content from './components/content';
import Read from './components/read';
import Create from './components/create';
//Adding Bootstrap and different React/NodeJS modules
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/*Creating the Navbar, adding different page options and pointing where each option goes to*/}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create1">CREATE</Nav.Link>
              <Nav.Link href="/read1">READ</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
      <br/>
      {/*Telling which content to load depending on what page we are on (e.g my-book-app/read1 loads the booklist HTML code)*/}
      <Routes>
      <Route path='/' element={<Content></Content>}></Route>
      <Route path='/create' element={<Header></Header>}></Route>
      <Route path='/read' element={<Footer></Footer>}></Route>
      <Route path='/read1' element={<Read></Read>}></Route>
      <Route path='/create1' element={<Create></Create>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
