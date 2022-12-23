// import logo from './logo.svg';
import './App.css';
import { Testimony } from './components/testimony.jsx';


function App() {
  return (
     <div className="App">
       <div className='principal_container'>
          <h1 className='title'>Naruto Characters</h1>
          <h2 className='subtitle'>These are our best shinobies testimonies: What do you think about them?</h2>
          <Testimony 
          name='Boruto'
          country='Leaf'
          image='boruto'
          job='Shinobi'
          company='7 Team'
          description="I'm a genious, I was considered as one my whole life"        
          />

          <Testimony 
          name='Flash'
          country='Japan'
          image='flash'
          job='Samurai'
          company='Deamon Slayer'
          description="I am considered as a normal person, but I have a secret power"        
          />

          <Testimony 
          name='Kakashi'
          country='Leaf'
          image='Kakashi'
          job='Shinobi'
          company='7 Team'
          description="I was supposed to be big, and I became the Hokage"        
          />

          <Testimony 
          name='Minato'
          country='Leaf'
          image='minato'
          job='Shinobi'
          company='7 Team'
          description="I was the most incredible shinobi ever, and I defeated Obito"        
          />

          <Testimony 
          name='Sasuke'
          country='Leaf'
          image='sasuke'
          job='Shinobi'
          company='7 Team'
          description="I am the only one who can follow him"        
          />
       </div>
     </div>
    
  );
}

export default App;
