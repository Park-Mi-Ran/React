//1. promis

//new Promise((resolve,reject)=>{}),두개의 인풋을 받는다.
//resolve -> 해결,성공 -> then
//reject -> 거절,실패 -> catch

//ex) 
function sayHello2(name) {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log(name+"님 안녕하세요")
            resolve("서울") //output
        },300)
    }

    )
}
sayHello2("frank")
    .then((seoul)=>console.log(seoul+"안녕히가세요")) //resolve의 output을 받아와서 input으로 활용한다.
 
//2. async func - then을 직관적으로 사용
// async func_name(p){
//       const result = await get_result()}

async function sayHelloBye(name) {
    loc = await sayHello2(name)
    console.log(loc+"로 안녕히 가세요")
}

sayHelloBye("sangyeon")

// 1. 비동기의 문제를 해결하기 위한 callback
// 2. 작업이 완료되면 알려주는 callback 은 가독성이 좋지 않다.
// 3. callback의 단점을 보안하기 위해서 완료를 약속하는 promise이다.
// 4. then과 catch로 편리한 사용이 가능
// 5. 더 편리하게 만든 것이 async/await이다.