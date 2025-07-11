import React, { useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom'


const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([

  ]);  

  // const cardsRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGI1OGFmMTY5MDI0NzU1NmUzZWE0Y2FkODdjNTYyNCIsIm5iZiI6MTc1MjIwODMxNC4zNDIwMDAyLCJzdWIiOiI2ODcwOTNiYTJhNjQ0YzY5MDk5YTU2MDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ISf60klULUnyTP_y1DxO5fBieu8zgHEkMrpMd0ojKTI'
  }
};


  // const handleWheel = (event)=> {
  //   event.preventDefault();
  //   cardsRef.current.scrollLeft += event.deltaY;
  // }

  // useEffect(()=>{

    
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

  //   cardsRef.current.addEventListener('wheel', handleWheel);
  // },[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list">
        {/* ref={cardsRef} */}
        {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}



export default TitleCards
