import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Pokemon from './components/poke/Pokemon';
import Twitter from './components/twitter/Twitter';
import MainNavbar from './components/shared/MainNavbar';

const App = () => (
  <>
    <MainNavbar />
    <Container>
      <Routes>
        <Route path='/' element={<Pokemon />} />
        <Route path='/twitter' element={<Twitter />} />
        <Route path='/*' element={<Pokemon />} />
      </Routes>
    </Container>
  </>
)

export default App;
