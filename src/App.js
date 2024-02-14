import './App.css';
import { useEffect,useState } from 'react';
import './Search.svg'
import Moviecard from './Moviecard'
const ApiUrl='http://www.omdbapi.com?apikey=16d208e0'

const movie1={
  "Title": "Spiderman the Verse",
  "Year": "2019–",
  "imdbID": "tt12122034",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
}
function App () {
  const [movies,setmovies]=useState([]);
  const [searchTerm,setsearctTerm]=useState('');
  console.log(movies)
    const searchMovies= async (title)=>{
      const response= await fetch(`${ApiUrl}&s=${title}`);
      const data= await response.json();

      setmovies(data.Search)
    }
  
  useEffect(()=>{
          searchMovies('spiderman');
  },[]);
  return (
    <div className='app'>
      <h1>Movie Land</h1>
      <div className='search'>
          <input placeholder='Search for movies' value={searchTerm}
          onChange={(e)=>setsearctTerm(e.target.value)}></input>
          <img
          src='https://cdn-icons-png.flaticon.com/128/3287/3287968.png'
          alt='search'
          onClick={()=>searchMovies(searchTerm)}
          ></img>

      </div>
      {
        movies?.length>0
        ?(
          <div className='container'>
       {movies.map((movie) => (
  <Moviecard key={movie.id} movie={movie} />
))}

      </div>
        ):
        (
          <div className='empty'>
              <h3>No movies found</h3>
            </div>
        )
      }
      
    </div>
  );
  }
export default App;
