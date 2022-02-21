// 함수
// 함수 선언식(Declaration)
function sum(a, b){ // function 함수명(매개변수)
    return a+b; // 함수가 값을 반환할 때는 return
}

// 함수 사용
console.log(sum(10, 20));

// 함수 표현식(Expression) : 이름이 없는 함수 -> 익명 함수
const asum = function(a, b){
    return a + b;
}
console.log(typeof asum, asum(10,20));

// 매개 변수의 이해
// JavaScript는 모든 인자값이 arguments라는 이름의 배열로 넘어온다
function getNumberTotal(){ // 인자 선언이 없다
    // console.log("arguments", arguments);
    // 전달받은 모든 매개변수(숫자)를 합산
    let result = 0;
    for (let i = 0; i<arguments.length; i++){
        if(typeof arguments[i] == "number"){
            result += arguments[i];       
        }
    }
    return result;
}

console.log(getNumberTotal(1, 2, 3, 4, 5));
console.log(getNumberTotal(1, 2, "3", 4, 5));

// JavaScript의 함수는 1급 시민
// function도 number, string 등의 객체와 동등한 권리
// 다른 함수의 인수로 전달될 수 있다

// 다른 함수의 인수로 전달되어서 함수의 내부에서 거꾸로 호출되는 것
// -> callback
function calcUsingCallback(val1, val2, func){
    // 전달된 func가 함수인가?
    if(typeof func == "function"){ // 실행 가능한 함수이다
        func(val1, val2); // -> callback

    }
}

calcUsingCallback(3, 4, function(v1, v2){
    console.log(v1 + v2);
});

calcUsingCallback(3, 4, function(v1,v2){
    console.log(v1 * v2);
});


// ES6 화살표 표기법 =>
// 인수가 없는 함수
const f1 = function(){ return "Hello"};
const f1Arrow = () => "Hello";

console.log(f1(), f1Arrow());
// 인수가 1개
const f2 = function(name) { return "Hello," + name};
const f2Arrow = name => "Hello, " + name;

console.log(f2("Bit"), f2Arrow("Bit"));
// 함수의 스코프가 다르다 -> 내부적 작동 방식이 다르므로 유의

// 인수가 2개 이상
const f3 = function(a, b) { return a + b};
const f3Arrow = (a, b) => { return a + b};

console.log(f3(3,7), f3Arrow(3,7));