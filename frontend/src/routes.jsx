import { Routes, Route, BrowserRouter} from 'react-router-dom';

import MainLayout from './hoc/mainLayout';
import Home from './components/home';
import Header from './components/navigation/header';

const Router = () => {
  return(
    <BrowserRouter>
      <Header/>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default Router