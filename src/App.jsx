import Header from './components/header/Header';
import { Outlet } from "react-router-dom";

// import {StyledHeader} from './components/header/Header.style'
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Outlet/>    
    </div>
  );
}

export default App;
