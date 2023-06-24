import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Tambah from './pages/Tambah';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" exact="true" element={<Home />}/>
          <Route path="/detail/:id" exact="true" element={<Detail />}/>
          <Route path="/edit/:id" exact="true" element={<Edit />}/>
          <Route path="/tambah" exact="true" element={<Tambah />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
