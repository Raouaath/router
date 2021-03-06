import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarMovie from './Components/NavbarMovie'
import MovieApp from './MovieApp';
import Child from './Components/Child'
import MovieList from './Components/MovieList';


function App() {

  const [film,setFilm] = useState(

    [
   
  {title : "The Revenant" , description : "Film de Florian Zeller avec Olivia Colman, Anthony Hopkins, Mark Gatiss" , posterURL : "/1.jpg" , rating : "5" },
  {title : "The Assassin " , description : "Film de Chloé Zhao avec Frances McDormand, David Strathairn, Gay DeForest" , posterURL : "/2.jpg" , rating : "3" },
  {title : "Adieu" , description : "Long-métrage d'animation de Michael Rianda et Jeff Rowe avec Abbi Jacobson, Danny McBride, Maya Rudolph" , posterURL : "/3.jpg" , rating : "2" },
  {title : "OldBoy " , description : "Film de Zack Snyder avec Ben Affleck, Gal Gadot, Henry Cavill" , posterURL : "/4.jpg" , rating : "5" }
    ]
      );


  return (
    <div>
      <Router>
      <NavbarMovie film = {film} setFilm = {setFilm}/>
      <Routes>
      
      <Route  path="/" element={<Home/>}  />
      <Route path="./Movies" element={ <MovieList setFilm={setFilm} film={film}/>}/>
      <Route  path="/Movies/:slug" element={<Child film = {film} />} /> 
      </Routes>
      </Router>
    </div>

   
  );
}

export default App;