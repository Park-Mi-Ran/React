import React, {useState} from 'react';

function Counter() {
    // userState함수는 호출해주면 배열이 반환된다.
    // 첫번째 원소는 현재 상태, 두번째 원소는 setter함수(파라미터로 전달 받은 값을 최신 상태로 설정해준다.)
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number+1);
    }
    const onDecrease = () => {
        setNumber(number-1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick = {onIncrease}>+1</button>
            <button onClick = {onDecrease}>-1</button>
        </div>
    );
}

export default Counter;

/* userState함수를 사용하지 않았을 때

const numberState = useState(0);
const number = numberState[0];
const setNumber = numberState[1];


* 함수형 업데이트를 사용할 때
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(preNumber => preNumber+1);
    }
    const onDecrease = () => {
        setNumber(preNumber => preNumber-1);
    }
*/