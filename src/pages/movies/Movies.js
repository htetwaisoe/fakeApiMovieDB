import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Genres from '../../components/Genres';
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/singleContent/SingleContent';
import UseGenre from '../../components/hook/UseGenre';
import {SunspotLoader} from 'react-awesome-loaders';

const Movies = () => {
    const [page, setPage] = useState(1);
    const [content,setContent] = useState([]);
    const [numOfPages,setnumOfPages] = useState();
    const [selectedGenres , setSelectedGenres] = useState([]);
    const [genres , setGenres] = useState([]);
    const genreforURL = UseGenre(selectedGenres)
    const [loading,setLoading]=useState(false);


    const fetchMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);

        // console.log(data.results);
        setLoading(true);
        setContent(data.results);
        setnumOfPages(data.total_pages);
    }
    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line
    }, [page,genreforURL])
    return (
        <div>
            <span className="pageTitle">Movies . </span>
            <Genres type="movie" genres={genres}
            selectedGenres={selectedGenres}
            setGenres={setGenres}
            setSelectedGenres={setSelectedGenres}
            setPage={setPage}
            
            />
            <div className="trending">
            { 
               loading ?  
               content.length < 1 ? <div style={{
                   color:"white",
                   fontSize:"1em",
                   display:'flex',
                   fontFamily:"'PT Sans', sans-serif",
                   textAlign:"center",
                   marginTop:"100px"
               }}>
                   <h1>Oops...No Movie Found !</h1>
               </div> :
            
                content && content.map((c)=>
                    <SingleContent key={c.id}
                    id={c.id} poster={c.poster_path}
                    title={c.title || c.name} date={c.first_air_date || c.release_date}
                    media_type="movie" vote_average={c.vote_average}
                     />
                ) : <div style={{marginTop:"100px"}}>
                    <SunspotLoader
                        gradientColors={["#6366F1", "#E0E7FF"]}
                        shadowColor={"#3730A3"}
                        desktopSize={"30px"}
                        mobileSize={"30px"}
                    />
                </div>
            }
        </div>
        {numOfPages > 1 && (
            <CustomPagination setPage={setPage} 
            numberOfPages={numOfPages}/>

        )}
        </div>
        
  
        
    );
   
    

};

export default Movies;