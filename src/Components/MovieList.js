import MovieCard from "./MovieCard";

function MovieList({film,textT,rateR,setFilm}){
    
      
    return(
        <div className="cards-Container">
            {
            film
            .map(el => <MovieCard el={el} film={film} setFilm={setFilm}/>) 
    
         }

        </div>
    )
}

export default MovieList;