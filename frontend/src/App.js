// import { Button } from '@chakra-ui/react';
import './App.css';
import HomePage from './Pages/HomePage';
import {Route} from 'react-router-dom'
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path ="/" component={HomePage} exact/>
      <Route path ="/chats" component={ChatPage} exact/>
    </div>
  );
}

export default App;
