import './App.css';
import NavBar from "./navbar/Navbar";
import {Route} from "react-router-dom";
import {Container} from "semantic-ui-react";
import Login from "./form/Login";
import AddUser from "./form/AddUser";

function App() {
  return (
      <>
          <NavBar/>
          <Container className='main'>
              <Route path='/login' component={Login}/>
              <Route path='/adduser' component={AddUser}/>
          </Container>
      </>
  );
}

export default App;
