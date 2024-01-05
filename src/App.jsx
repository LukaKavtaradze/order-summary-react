
import './App.css'
import Header from './components/header/header'
import Price from './components/price/price'
import Text from './components/text/text'
import PayCancel from './components/paycancel/paycancel'

function App() {


  return (
    <div id='main-container' className='flex flex-col  items-center w-[327px] mt-[75px] bg-white rounded-[20px] xl:w-[450px]'>
      <Header />
      <Text />
      <Price /> 
      <PayCancel />

    </div>
  )
}

export default App
