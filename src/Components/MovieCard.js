import ReactStars from "react-rating-stars-component";
import EditCard from "./EditCard";
import {Link} from "react-router-dom"

function MovieCard({el,film,setFilm,i}){
        
    return(
                   
         
        <div className="card">
            <h3>{el.title}</h3>
            <img src={el.posterURL} alt="" style={{width :"184PX", height :"273px"}}/>
            <p>{el.description}</p>
            <ReactStars count={el.rating}  size={24} color="#ffd700"/>    
            <EditCard el = {el} film = {film} setFilm = {setFilm} i ={i}></EditCard>  
            <Link to={`/details/${el.id}`}><button>details</button> </Link>
</div>
        
                
        
        
    )
}

export default MovieCard;