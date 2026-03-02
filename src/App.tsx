import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Navbar } from './components/Navbar';
import { Lines } from './components/Lines';


function App() {

  return (
    <>
      <Container>
        <Navbar />
      </Container>

      <Container>
        <Lines />
      </Container>

    </>
  );
}

export default App
