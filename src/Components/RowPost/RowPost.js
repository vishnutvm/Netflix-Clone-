import React,{useState,useEffect} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constents'
function RowPost(props) {
  console.log("row working")
  const [movies, setmovies] = useState([])
const [urlId, seturlId] = useState('')


///
  useEffect(() => {
 
    return () => {

      
     axios.get(props.url).then((response)=>{
      
      setmovies(response.data.results)
     }).catch((err)=>{
      console.log(err)
     })
    }
  },[])
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
console.log(id)
axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  if(response.data.results.length !== 0){
 
    // filtering only the trailer from the result
    var filterdArry = response.data.results.filter((item)=>{
      return item.type === "Trailer"
    })
    
    seturlId(filterdArry[0])
  

  }else{
    console.log("Youtube content not avilable")
  }
})
  }
  return (

    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
        {
          
          movies.map((movie,index)=>{
            console.log(movie)
            return(
                <img onClick={()=>{
handleMovie(movie.id)
                }} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+movie.backdrop_path}`}  alt="poster"  key={index}/>

            )
          })
        }
          
         
        </div>
   {    urlId &&  <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost