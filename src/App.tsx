import Landing from "./pages/Landing"
import ComingSoon from "./pages/ComingSoon"
import NotFound from "./pages/NotFound"
import { Route, Routes, BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/blog' element={<ComingSoon />} />
          <Route path='/profile' element={<ComingSoon />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
