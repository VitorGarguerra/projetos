import './App.css';
import './media-query.css';
import Header from './components/header';
import Video from './components/video';
import Text from './components/text';
import Section from './components/section';

function App() {
  return (
    <div className="App">
      <Video/>
      <Header/>
      <Text/>
      <Section/>

    </div>
  );
}

export default App;
