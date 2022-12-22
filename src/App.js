// import logo from './logo.svg';
import './App.css';
import { Testimony } from './components/testimony.jsx';


function App() {
  return (
     <div className="App">
       <div className='principal_container'>
          <h1>These are our best shinobies testimonies: What do you think about them?</h1>
          <Testimony 
          name='Boruto'
          country='leaf'
          image='boruto'
          job='shonobi'
          company='7 team'
          description="I'm a genious, I was considered as one my whole life"        
          />
       </div>
     </div>
    
  );
}

export default App;
