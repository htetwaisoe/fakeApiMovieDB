import axios from 'axios'
import React, { useState,useEffect } from 'react'
import SingleContent from '../../components/singleContent/SingleContent';
import './trending.css';
import CustomPagination from '../../components/Pagination/CustomPagination';
import {SunspotLoader} from 'react-awesome-loaders';


const Trending = () => {
    const [content, setcontent] = useState([]);
    const [page , setPage] = useState(1);
    const [loading,setLoading] = useState(false)

    const FetchTrending = async () =>{
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        setcontent(data.results);
        setLoading(true);
    }
    useEffect(()=>{
        FetchTrending();
        // eslint-disable-next-line
    },[page])
    return (
    <>
        <span className="pageTitle">Popular.</span>
        <div className="trending">
            {
                loading ?
                content && content.map((c)=>
                    <SingleContent key={c.id}
                    id={c.id} poster={c.poster_path}
                    title={c.title || c.name} date={c.first_air_date || c.release_date}
                    media_type={c.media_type} vote_average={c.vote_average}
                    
                    
                    />
                ):<div style={{marginTop:"100px"}}>
                    <SunspotLoader
                        gradientColors={["#6366F1", "#E0E7FF"]}
                        shadowColor={"#3730A3"}
                        desktopSize={"30px"}
                        mobileSize={"30px"}
                    />
                </div>
            }
        </div>
        <CustomPagination setPage={setPage} />
    </>
    );
    
}

export default Trending
