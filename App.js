import {
  Routes,
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom'

import EmojiGame from './components/Game1'
import Header from './components/Header'

import Game1Rules from './components/Game1Rules'

import RockScissor2 from './components/Game2'
import Game2Rules from './components/Game2Rules'

import Game3 from './components/Game3'
import Game3Rules from './components/Game3Rules'

import Game4c from './components/Game4'
import Game4Rules from './components/Game4Rules'

import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/game1rules" element={<Game1Rules />} />
      <Route path="/game1" element={<EmojiGame />} />

      <Route path="/game2" element={<RockScissor2 />} />
      <Route path="/game2rules" element={<Game2Rules />} />
      <Route path="/game4rules" element={<Game4Rules />} />
      <Route path="/game3" element={<Game3 />} />
      <Route path="/game3rules" element={<Game3Rules />} />

      <Route path="/game4" element={<Game4c />} />
    </Routes>
  </Router>
)

export default App

