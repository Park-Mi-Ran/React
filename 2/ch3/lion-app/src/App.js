import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'blak',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem',
  };
  return (
    <>
    {/* JSX에서의 주석처리하고 싶을 때 */}
    {/* hello컴포넌트를 사용할 때 name이라는 값을 전달해주고싶을때 app.js->hello.js로 값을 전달*/}
    <Hello name="react" color="red" />
    {/*재사용 가능*/}
    <Hello color="blue" />
    {/* 자바스크립트 변수를 보여줄 때 {}으로 감싸서 보여줘야한다.*/}
    <div style={style}> {name} </div> 
    <div className = "gray-box"></div>\

    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="blue" />
    </Wrapper>
    <Counter />
    <InputSample />
    <UserList />
    </> 
    /*두개 이상의 태그는 무조건 하나의 태그로 감싸져있어야한다.
    불필요한 div로 감싸는것은 좋지 않은 방법이다.
    -> 리액트의 fragment를 사용 
    <> </>
    */
  );
}

export default App;
