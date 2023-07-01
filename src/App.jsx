import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';
import NotFound from './pages/NotFound';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} exact/>
        <Route path='/blog/:slug' element={<SinglePost/>} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App
