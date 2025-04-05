import { Suspense } from 'react';
import './App.css'
import Counter from './button';
import Batman from './player';
import Users from './users';
import Friends from './Friends';
import Counters from './Counter';
import Foods from './Food';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {
  const friendPromice = fetchFriends()

  // button 1 onclick used
  function handleClick() {
    alert('hellow i ame click me1')
  }
  // button 3 onclick array function 
  const handelClick3 = () => {
    alert('clicked 3')
  }
  // button  5 on click add
  const handelClickAdd = (number) => {
    const add = number + 5;
    alert(add)
  }
  const handelClickAdd1 = (num) => {
    const add = num - 5;
    alert(add);
  }

  return (
    <>
      <h1 style={{
        color: "green",
      }}>React core concept part2</h1>
      <Counters></Counters>
      <Foods></Foods>
      <Suspense fallback={<p>friends comming...</p>}>
        <Friends friendPromice={friendPromice} ></Friends>
      </Suspense>

      <Suspense fallback={<h2>loading...</h2>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Batman></Batman>
      <Counter></Counter>

      <button className='btn' onClick={() => handelClickAdd1(21)} >click me</button>

      <button onClick={handleClick} className='btn'>click me1</button>

      {/* button on click 2 */}
      <button onClick={function handleClick() {
        alert('hellow i am click button 2')
      }} className='btn'>click me2</button>
      {/* button 3 */}
      <button onClick={handelClick3} className='btn'>click me 3</button>
      {/* button 4 */}
      <button onClick={() => alert('clicked 4')} className='btn'>click me 4</button>
      {/* button 5 */}
      <button onClick={() => handelClickAdd(10)} className='btn'>click add </button>
    </>
  )
}

export default App
