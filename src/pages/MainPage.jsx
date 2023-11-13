import React, { useEffect, useState } from 'react'
import { wons } from '../utils/won';
import { numbersRandom } from '../utils/ramdomNumberGenerator';
import Box from '../components/box/Box';
import Boxs from '../components/boxs/Boxs';
import Heads from '../components/Heads/Heads';

const MainPage = (prop) => {

  const [dataBox, setDataBox] = useState([1, 2, 3])
  const [won, setWon] = useState([])
  const [score, setScore] = useState(0);
  const [countGame, setCountGame] = useState(0);



  const [data, setData] = useState([])




  useEffect(() => {
    const dataReturn = wons(dataBox);
    if (dataReturn === 1) {
      setScore(score + 1);
    } else if (dataReturn) {
      setScore(score + 10);
    }
  }, [dataBox])




  const randomNumbers = () => {
    const todo = numbersRandom()
    setDataBox(todo)
    setCountGame(countGame + 1);
  }




  return (
    <div>
      <Heads

      />
      <hr />
      <Boxs
        data={dataBox}

      />
      <hr />
      <div className="container">
        <button className="button primary  btn-block" onClick={randomNumbers}>Info</button>

      </div>

      <div className="container">
        <h3>Score</h3>
        <Box
          data={[score]}

        />

      </div>
      <div className="container">
        <h3>Games</h3>
        <Box
          data={[countGame]}

        />

      </div> 

    </div>
  )
}

export default MainPage
