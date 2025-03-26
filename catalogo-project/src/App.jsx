import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Content />
      <Footer />
    </>
  )
}


//Para que a função seja chamada em outros elementos nós devemos "exporta-la"
export default App