import { Routes, Route } from 'react-router-dom'
import { IndexPage } from './pages/static'

const App = () => {
  return (
    <Routes>
      <Route path='/index' element={<IndexPage />} />
      <Route path='*' element={<h1>error 404</h1>} />
    </Routes>
  )
}

export default App