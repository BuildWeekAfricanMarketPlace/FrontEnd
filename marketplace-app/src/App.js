import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// components
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import UpdateUserDetails from "./components/UpdateUserDetails";
import ProductsPage from "./components/ProductsPage";
import PrivateRoute from "./components/PrivateRoute";

// styles
import "./App.css";
import styled from "styled-components";
import styledProperty from "styled-property";

// styled-components

const Wrapper = styled.div`
  background: rgb(246, 247, 249);
  font-family: "Open Sans", sans-serif;
  height: 290vh;
  min-height: 290vh;
`;

const TopNav = styled.nav`
  background-color: rgb(15, 15, 15);
`;

const ListDad = styled.ul`
  display: flex;
  margin: 0;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 2em;
  color: rgb(29, 155, 76);
`;
const Spam = styled.span`
  color: rgb(250, 179, 51);
`;

const List = styled.li`
  list-style: none;
`;

const ALink = styled.a`
  font-size: 1.2em;
  color: rgb(248, 248, 248);
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: rgb(250, 179, 51);
  }
`;

const BaseLink = styled(Link)`
  font-size: 1.2em;
  color: rgb(248, 248, 248);
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: rgb(250, 179, 51);
  }
`;
const StyledLink = styledProperty(BaseLink)`
    color: rgb(250, 179, 51);
`;

function App() {
  return (
    <Router>
      <Wrapper className="App">
        <header>
          <TopNav>
            <ListDad>
              <Title>
                African <Spam>MarketPlace</Spam>
              </Title>
              <List>
                <ALink href="https://distracted-bhaskara-52b4fe.netlify.app/">
                  Home
                </ALink>
              </List>
              <List>
                <StyledLink className="login" to="/">
                  Login
                </StyledLink>
              </List>
              <List>
                <StyledLink className="protected" to="/products-page">
                  Products
                </StyledLink>
              </List>
              <List>
                <StyledLink className="protected" to="/user-profile">
                  Account
                </StyledLink>
              </List>
            </ListDad>
          </TopNav>
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/products-page" component={ProductsPage} />
            <PrivateRoute path="/user-profile" component={Profile} />
            <PrivateRoute path="/update-user" component={UpdateUserDetails} />
          </Switch>
        </header>
      </Wrapper>
    </Router>
  );
}

export default App;

// woo joo noo x
// donald trump x
// jojo jaja
// mal / joe
// daycare / day
//<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
