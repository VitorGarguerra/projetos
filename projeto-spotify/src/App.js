import Menu from './components/menu'
import Header from './components/header'
import Section from './components/section'
import Biblioteca from './components/biblioteca';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Biblioteca/>
      <Header/> 
      <Section/>
    </div>
  );
}

export default App;
