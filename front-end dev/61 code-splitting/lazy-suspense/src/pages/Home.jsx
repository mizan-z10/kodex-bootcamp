import React from 'react'
import { UseproductApi } from '../hook/UseProductApi';

const Home = () => {
  
  let {data} = UseproductApi()
  // console.log(data);

  return (
    <div>Home</div>
  )
}

export default Home