import Layout from './components/common/Layout'
import { HomePage } from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><HomePage /></Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
