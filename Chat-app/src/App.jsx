
import { useEffect, useState } from 'react'
import './App.css'
import Splash from "./SplashScreen"


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    },3000);
 
      return () => clearTimeout(timer);
  },[]);

  return (
    <>
    {isLoading ? (<Splash/>) : (<div>🥷</div>)}
    </>
  )
}

export default App
