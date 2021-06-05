import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';



const App = () => {
  // state handling
  // useState returns 2 variables: a string (word) and a function (setWord)
  // setWord is a function that sets the value of the variable word
  // both are passed as properties to the Search component so that they can be used by that component
  const [word, setWord] = useState('');
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }

  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
