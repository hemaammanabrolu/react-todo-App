import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import  BasicExample from './components/Head';
// import Page from './components/page';
import * as React from 'react';
import Todo from './FunctionalComponents/Todo';



// import { Box }from './components/Box';
// import { Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';


// function Home() {
//   return (
//     <div>
//       <h1>This is the home page</h1>
//       <Link to="about">Click to view our about page</Link>
//       <br/>
//       <Link to="help">Click to view our contact page</Link>
//     </div>
//   );
// }
function App() {
  return (
   <>
      <div className='container  '>

        <Todo/>
        
      </div>  
    </>
  );
}

export default App;
