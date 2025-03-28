import Counter from './counter';
import Batsman from './Batsman';
import Bowler from './Bower';
import Users from './Users';
import Friends from './Friends';
import './App.css'
import { Suspense } from 'react';

const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const fatchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

function App() {
  const friendPromise = fatchFriends();
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
      <Suspense fallback={<h1>Loading...</h1>}>
      <Users fetchUser={fetchUser}></Users>
      </Suspense>
      
      <Suspense fallback={<h1>Friends are coming for treat...</h1>}>
        <Friends friendPromise={friendPromise}></Friends>
      </Suspense>
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
