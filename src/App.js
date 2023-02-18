// import logo from './logo.svg';
import './App.css';
import { Testimony } from './components/testimony.jsx';
import { boruto_object, zenitsu_object, kakashi_object, minato_object, sasuke_object } from './components/props.js';
import React from 'react';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <div className='principal_container'>
//            <h1 className='title'>Anime Characters</h1>
//            <h2 className='subtitle'>These are our best warriors descriptions: What do you think about them?</h2>
 
//            <Testimony 
//            {...boruto_object}  
//            />
 
//            <Testimony 
//            {...zenitsu_object}         
//            />
 
//            <Testimony 
//            {...kakashi_object}          
//            />
 
//            <Testimony 
//            {...minato_object}        
//            />
 
//            <Testimony 
//            {...sasuke_object}      
//            />
//         </div>
//       </div>
     
//    );
//   }
// }

function App() {
  
  return (
     <div className="App">
       <div className='principal_container'>
          <h1 className='title'>Anime Characters</h1>
          <h2 className='subtitle'>These are our best warriors descriptions: What do you think about them?</h2>

          <Testimony 
          {...boruto_object}  
          />

          <Testimony 
          {...zenitsu_object}         
          />

          <Testimony 
          {...kakashi_object}          
          />

          <Testimony 
          {...minato_object}        
          />

          <Testimony 
          {...sasuke_object}      
          />
       </div>
     </div>
    
  );
}

export default App;
