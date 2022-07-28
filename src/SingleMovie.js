import React, {useState, useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './context';
const SingleMovie = () => {
    const {id} = useParams();

    const [isLoading, setIsLoading, isError, setIsError] = useState(true)
    const [movie, setMovie] = useState("")
    

    const getMovies= async(url)=>{
        try{
            const res = await fetch(url);
            const data= await res.json();
            console.log(data);
            if(data.Response==="True"){
                setIsLoading(false);
                setMovie(data);
            }
            // else{
            //     setIsError({
            //         show: true,
            //         msg: data.error,
            //     });


            // }

        }
        catch(error){
            console.log(error);
        }
    }



    useEffect(()=>{
        let timerOut=setTimeout(()=>{
            getMovies(`${API_URL}&i=${id}`)
        },600)
        return()=> clearTimeout(timerOut) ;
    },[id])

    if(isLoading){
        return(
            <div className='movie-section'>
                <div className='loading'>Loading...</div>

            </div>
        )
    }

  return (
    <div>
       <section className='movie-section'>
            <div className='movie-card'>
                <figure>
                    <img src={movie.Poster} alt="" />
                </figure>
                <div className="card-content">
                    <p className="title">{movie.Title}</p>
                    <p className="card-text">Released: <b>{movie.Released}</b></p>
                    <p className="card-text">Genre: <b>{movie.Genre}</b></p>
                    <p className="card-text">imdb Rating: <b>{movie.imdbRating}/10</b></p>
                    <p className="card-text">Country: <b>{movie.Country}</b></p>
                    <NavLink to="/" className="back-btn">Go Back</NavLink>
                </div>
            </div>
       </section>
    </div>
    
  )
}

export default SingleMovie