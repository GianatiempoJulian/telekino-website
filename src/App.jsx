import { useState } from 'react'
import { LastResultCard } from './components/LastResultCard'
import { NextLotteryCard } from './components/NextLotteryCard'
import { CheckResultCard } from './components/CheckResultCard'
import { VideoList } from './components/VideoList'
import './App.css'


function App() {

  const prize = {
    money: '120',
    car: 'AUTO 0KM',
    house: 'CASA ESTILO AMERICANA'
  }

  return (
    <>
     <article className="grid grid-cols-2 gap-5">
      <div className='h-screen'>
        <LastResultCard 
            date='04/03/2024'
            lotteryNumber = '2330'
          >
          </LastResultCard>
      </div>
      <div className='h-screen grid content-evenly grid-rows-3'>
        <NextLotteryCard
            date='11/03/2024'
            lotteryNumber='2331'
            price = '500'
            prize = {prize}
          ></NextLotteryCard>
           <CheckResultCard></CheckResultCard>
          <VideoList></VideoList>
      </div>
     </article>
    </>
  )
}

export default App
