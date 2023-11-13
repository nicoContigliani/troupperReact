import React, { useEffect, useLayoutEffect, useState } from 'react';

import './App.css';
import { numbersRandom } from './utils/ramdomNumberGenerator';
import Boxs from './components/boxs/Boxs';
import Heads from './components/Heads/Heads';
import { wons } from '../src/utils//won'
import { counterMoney } from './utils/countMoney';
import Box from './components/box/Box';



import { AxiosTodo } from './services/axios.services';
import MainPage from './pages/MainPage';
function App() {

  // const [dataBox, setDataBox] = useState([1, 2, 3])
  // const [won, setWon] = useState([])
  // const [score, setScore] = useState(0);
  // const [countGame, setCountGame] = useState(0);


  const [data, setData] = useState([])


  useLayoutEffect(() => {
    const getData = {
      url: `http://localhost:3000/player/player/`,
      method: 'get',
      body: null,
      idParams: 1

    }
    const axiosGet = async () => {
      const todo = await AxiosTodo(getData)
      const { data } = todo
      setData(data)

    }
    axiosGet()
  }, [])


  console.log("🚀 ~ file: App.jsx:21 ~ App ~ data:", data)







  return (

    <div>
      <div className="container">

        <MainPage
          todo={data}

        />

      </div>
    </div>
  );
}

export default App;
