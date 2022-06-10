import { Routes, Route } from 'react-router-dom'
import { IndexRouter, IndexPage } from './pages/static'

const App = () => {
  return (
    <Routes>
      <Route path='/static/' element={<IndexRouter />} >
        <Route path='index' element={<IndexPage />} />
      </Route>
      <Route path='*' element={<h1>error 404</h1>} />
    </Routes>
  )
}

export default App