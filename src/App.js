import { BrowserRouter } from 'react-router-dom'
import { MainRouter } from './view/MainRouter'
import './assets/css/main.css'


function App() {
  return (
    <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
  );
}

export default App;
