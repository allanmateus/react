import Header from './components/header/Header';
import { Outlet } from "react-router-dom";

// import {StyledHeader} from './components/header/Header.style'
function App() {
  
  return (
    <div className="App">
      <Header/>
      <body>
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
      </body>
      <Outlet/>    
      <link rel="stylesheet" href="./tailwhind.css"/>
    </div>
  );
}

export default App;
