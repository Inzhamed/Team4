import Signup from "./Signup"
import {Routes, Route } from 'react-router-dom';
import Signin from './Signin'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </>
  )
}

export default App
