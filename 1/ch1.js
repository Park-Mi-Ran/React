// arrow funciton
//1. 기본 
//- ()=>{}/()=>
//2. 입력이 하나일 때
//- =>{}/=>


function plusTwo(s) {
    return s+2
}
console.log(plusTwo(10));

plusTwo = (s) => { return s+2 }

plusTwo = (s) => s+2 

plusTwo = s => s+2 //function name = 변수 => return


// 1. map
// Array의 각 요소를 순회하며 callback 함수를 실행
// 다만, callback에서 return 되는 값을 배열로 만들어낸다.
arr = [1,2,3,4,5,6,7,8]

arr_map = arr.map(function(value){return value*2});
arr_map = arr.map(value => value*2);
console.log(arr_map);

// 2. filter

arr_filter = arr.filter(v => v>10);
console.log(arr_filter);