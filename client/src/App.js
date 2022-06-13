import { Routes, Route, Navigate } from 'react-router-dom'
import { IndexPage } from './pages/static'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/index' replace />} />
      <Route path='*' element={<h1>error 404</h1>} />

      <Route path='/index' element={<IndexPage />} />
    </Routes>
  )
}

export default App