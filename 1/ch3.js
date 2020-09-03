//1. 비동기성 -> 모든게 절차적으로 실행 x
// - 인터넷 속도 의존
// - 유저 인터랙션 -> 속도가 느려도 인터랙션은 되어야 한다.
setTimeout(()=>{console.log("안녕하세요")}, 2000) // setTimeout()V :  일정 시간이 지난 후에 함수를 실행

console.log("안녕히 가세요")
//결과
// 안녕히 가세요
// 안녕하세요

// Call back 다되면 실행시켜줘
//ex1)
function sayHello(sayGoodbye){
    setTimeout(()=>{
        console.log("안녕하세요");
        sayGoodbye();
    },2000);
}
sayHello(()=>console.log("안녕히가세요"))

//ex2)
function sayHello(name,byeCallback){
    setTimeout(()=>{
        console.log(name+"님 안녕하세요");
        byeCallback();
    },2000);
}
sayHello("mike", ()=>console.log("안녕히가세요")) // 비동기 함수가 끝나면 실행시키겠다.

//ex3)
function doSomethingElseAsyns(callback){
    console.log('doSomethingElseAsync: Wait for half a sec.');
    setTimeout(function() { callback();}, 500);
}

//2. 동기성
