import Navbar from './Components/Navbar';
import './App.scss';
import Header from './Components/Header';
import About from './Components/Work';
import Skills from './Components/Skills'; 
import Music from './Components/Music';

function App() {
  
  return (
    <div className="App">
        <Navbar href={"#header"} />
      <div className="sections">       
        <div id="header">
          <Header title={'My name is Ynte Wiardus Braaksma'} subtitle={'I am a Web developer, multimedia designer and musician'}/> 
          <summary>I like to design and develop meaningful multimedia solutions. <br/> Scroll down to see more...</summary>
        </div>              
          <About title={'My Work'} subtitle={'Click below to find my projects...'}/>              
          <Skills />    
          <Music />  
      </div>    
    </div>
  );
}

export default App;
