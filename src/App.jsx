import './App.css'
import LineChart from './Component/LineChart/LineChart'
import Navbar from './Component/Navbar/Navbar'
import PriceOptions from './Component/PriceOption/PriceOptions'
// import DaisyNav from './Component/DAisyNave/Daisynav'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      {/* <h1 className='text-5xl'>Vite + React</h1> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
