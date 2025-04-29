
import { Outlet, useNavigation } from 'react-router'
import './App.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Skeleton from './Components/Skeleton'

function App() {
  const navigation = useNavigation()
  // console.log(navigation)
  return (
    <>
        <NavBar></NavBar>
        <div className='max-w-5xl mx-auto'>
          {navigation.state === 'loading' ? <Skeleton></Skeleton> : <Outlet></Outlet>}
        </div>
        <Footer></Footer>
    </>
  )
}

export default App
