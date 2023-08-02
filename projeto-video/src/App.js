import Fly from './components/fly';
import Footer from './components/footer';
import Section from './components/section';
import Video from './components/video'
import Header01 from './media-query/header01';


function App() {
  return (
    <div className="App">
      <Video/>
      <Section/>
      <Fly/>
      <Footer/>
      <Header01/>
    </div>
  );
}

export default App;
