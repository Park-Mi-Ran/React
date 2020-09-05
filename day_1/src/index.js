/*
js와 html의 경우 
id를 사용하여 각 dom을 선택한 뒤, 원하는 이벤트가 발생하면
dom의 특정속성을 바꾸어주어야한다.

*/
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
  console.log("increase 가 클릭됨");
};

decrease.onclick = () => {
  console.log("decrease 가 클릭됨");
};


