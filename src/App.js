import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from "styled-components"
import Chat from "./components/Chat"
import Login from "./components/Login"
import { style } from '@mui/system';
//import Spinner from "react-spinkit"


function App() {
  //GoogleAuth login
  //const user = {name: "test"}

  //logout
  const user = null

  //loading中はスピナーなどにする
  /**
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="" alt="">
          <Spinner 
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none"
          />

        </AppLoadingContents>
      </AppLoading>
    )
  }
   */

  return (
    <div className="App">
        <Router>
          {!user ? (
            <Login />
          ) : (
            <>
              <Header />
              <AppBody>
                <Sidebar />
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Routes>
                  <Route path="/" exact element={<Chat />}></Route>
                </Routes>
              </AppBody>
            </>
          )}

      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
    display: flex;
    height: 100vh;
`

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center

  > img {
    height: 100px;
    padding: 20px;
  }
`