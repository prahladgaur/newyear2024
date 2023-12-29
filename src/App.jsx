//import { useNavigate } from 'react'
import { AppProvider } from './AppContext';
import "./App.css";
//import Player from "./components/Player"
import Header from "./components/Header";
import Home from "./components/Home";

function App() {

  //const navigate = useNavigate();
  return (
    <>
    <AppProvider>
    <Header/>
    <Home/>    
    </AppProvider>
    </>
  );
}

export default App;
