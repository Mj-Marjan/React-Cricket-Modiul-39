import Counter from './counter';
import Batsman from './Batsman';
import Bowler from './Bower';
import './App.css'

function App() {
    function handleClick() {
      alert('Assalamualikum Vaiijan')
    }
    const handleClick2 = () => {
      alert('Walaikumassalam, Vaiijaannnnnnn')
    }
    const handleClick3 = (num) => {
      const newNum = num + 5;
      alert(newNum)
    }
  return (
    <>
      <h3>Asslamualikum Hellow REACT JS</h3>
      <Batsman></Batsman>
      <Bowler></Bowler>
      <Counter></Counter>
      <button onClick={handleClick}>Check ME please</button>
      <button style={{marginLeft: '10px', backgroundColor: 'red', text: 'white'}} onClick={handleClick2}>Again Check ME </button>
      <button onClick={ () => alert('Walaikumassalam, Vaiijaannnnnnn')}>Again Check ME 2</button>
      <button onClick={() => handleClick3(5)}>Click me</button>
    </>
  )
}

export default App
