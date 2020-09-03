//1. class
class Animal{
    constructor(leg){
        this.leg = leg
    }
    printAnimal() {
        console.log(this.name+"은 "+String(this.leg)+"개 다리를 가진다.")
    }
}
// lion <- animal의 유용한 기능을 가져다 쓸 수 있다.
class Lion extends Animal{
    constructor(name){ //객체의 값 설정
        this.name = name
    }
    getName() {
        console.log("내 이름은 "+this.name)
    }
}

myLion = new Lion("king")
myLion.getName()

//상속: 모듈화를 쉽게해준다. 공통분모를 모아서 상위클래스로 만들고 하위클래스들이 쓸 수 있게 만든다.

//2. constructor
//3. super
class Animal{
    constructor(leg){
        this.leg = leg
    }
    printAnimal() {
        console.log(this.name+"은 "+String(this.leg)+"개 다리를 가진다.")// this.leg는 name을 가져온다.
    }
}
// lion <- animal의 유용한 기능을 가져다 쓸 수 있다.
class Lion extends Animal{
    constructor(name){ //객체의 값 설정
        super(leg)// super은 부모의 input (constrcutor의 인풋 파라미터)
        this.name = name
    }
    getName() {
        console.log("내 이름은 "+this.name)
    }
}

myLion = new Lion("king",4)
myLion.getName()
myLion.printAnimal()


//qs
class Timer extends React.Component {
    constructor(props) {
        super(props); // React.Component의 input을 의미
        this.state = {seconds : 0};
    }
    thick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }
    ComponentDidMount() {
        this.interval = setInterval(()=>this.thick(),1000);
    }
}

