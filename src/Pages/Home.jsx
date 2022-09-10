import React,{useEffect,useState} from 'react'
import MemeCard from '../Components/Card'
import {getAllMemes} from '../api/Memes';

const Home = () => {
    const [data,setData] = useState(null);
    useEffect(()=>{
        getAllMemes().then((memes) => setData(memes.data.memes))
    },[])
    return (
    <div className="meme__card">
        {
            data?.map(el => <MemeCard title={el.name} img={el.url}/>)
        }
    </div>
  )
}

export default Home