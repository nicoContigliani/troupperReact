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
import Headers from './components/headers/Headers';
function App() {

  // const [dataBox, setDataBox] = useState([1, 2, 3])
  // const [won, setWon] = useState([])
  // const [score, setScore] = useState(0);
  // const [countGame, setCountGame] = useState(0);


  const [datas, setDatas] = useState([]);

  useEffect(() => {
    if (!datas.length) {
      const getData = {
        url: `http://localhost:3000/player/player/`,
        method: 'get',
        body: null,
        idParams: 1
      };

      const axiosGet = async (dataForAxios) => {
        const todo = await AxiosTodo(dataForAxios);
        let { data } = todo;
        setDatas(data[0]);
      };

      axiosGet(getData);
    }
  }, []);
  console.log("🚀 ~ file: App.jsx:43 ~ App ~ datas:", datas)














  return (

    <div>
      <div className="container">
        <hr />
        <Headers
          data={datas}
        />
        <hr />
        <MainPage
          todo={datas}

        />

      </div>
    </div>
  );
}

export default App;
