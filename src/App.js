import './App.css';
import MessageDashboard from './components/MessageDashboard';

function App() {
  
  return (
      <MessageDashboard messages = {messages} />  
  );
}

const messages = [
  {id: 1, sender: 'Denys', text: 'Hello!'},
  {id: 2, sender: 'Oksans', text: 'Bye!'},
  {id: 3, sender: 'Nika', text: 'Hi, how are you?'},
  {id: 4, sender: 'Dmytro', text: 'Happy birthday!'},
  {id: 5, sender: 'Max', text: 'Congrags!'},
];

export default App;
