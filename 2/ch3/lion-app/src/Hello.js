import React from 'react';
// 리액트  컴포넌트를 만들기위해서는 리액트를 import해야한다.
function Hello(props){
    {/* 전달 받은 name의 값을 사용하고 싶을 때*/}
    return <div style={{color: props.color}}>안녕하세요 {props.name}</div>
}
/* props는 객체 형태로 전달된다.*/

/* 비구조화 할당문법을 사요아여 코드를 간결하게 작성
function Hello({color,name}){
    return <div style={{color}}>안녕하세요 {name}</div>
}
*/
function Hello({color,name,isSpecial}){
    return <div style={{color}}>
        {/* 조건식 ? a(true) : b(false) */}
        {isSpecial ? <b>*</b> : null}
        안녕하세요 {name}
    </div>
//defaultProps 기본값 설정
Hello.defaultProps = {
    name: '이름없음'
}
export default Hello;
//hello라는 컴포넌트를 내보내겠다는 의미이다.
//->다른 컴포넌트에서 불러와서 사용 할 수 있다.