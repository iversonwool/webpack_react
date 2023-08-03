import React from 'react'
// import Home from "./pages/Home";
// import About from "./pages/About";
import { Link, Routes, Route} from "react-router-dom"
import {Button} from 'antd'
import "./App.less";


const Home = React.lazy(() => import(/* webpackChunkName: 'home' */'./pages/Home'))
const About = React.lazy(() => import('./pages/About'))

function App() {
  return (
    <div>
      <Button type={"primary"}>ANTD BUTTON</Button>
      <h1>App</h1>
      <ul>
        <li><Link to={"/home"}>to homepage</Link></li>
        <li><Link to={"/about"}>to about us</Link></li>

      </ul>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/home'} element={<Home />} />
          <Route path={'/about'} element={<About />} />

        </Routes>
      </React.Suspense>
    </div>
  )
}

export default App