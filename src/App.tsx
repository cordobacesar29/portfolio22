import { Home } from './pages/Home';
import { Service } from './pages/Service';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './components/Header';
import {Footer} from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Service />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;