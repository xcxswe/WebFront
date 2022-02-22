const v1 = new Array(10); // 10개 짜리 빈 배열
const v2 = new Array(); // 빈 배열
const v3 = new Array(1, "ABC", true);

console.log(v1, v2, v3);
// length 속성 : 요소의 수
console.log(v1.length, v2.length, v3.length);

// 리터럴로 생성 (추천)
const v4 = []; // 빈 배열
const v5 = ["red", "green", "blue", "yellow"];

console.log(v4, v5);
console.log(v4.length, v5.length);

// 객체도 배열처럼 접근할 수 있다.
const person = {
    name: "홍길동",
    age: 28
};

console.log(person["name"] +":"+ person['age']);

// 자바 스크립트 배열은 인덱스 엄격히 체크하지 않음

const arr = [];
console.log(arr.length);
// 인덱스 범위를 벗어난 배열의 접근
arr[10] = 2022;
console.log(arr);
console.log(arr.length);

// 배열 합치기
const veges = ["배추", "무", "쪽파"];
const sources = ["소금", "고추가루", "새우젓"];

console.log(veges, sources);

const ingr = veges.concat(sources);

console.log(ingr);

// join: 특정 문자열을 기준으로 합친다 -> string
console.log("김장재료:", ingr.join(","));

// push, pop : 뒤쪽에서 요소 삽입, 추출
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.push("Kiwi"); // 배열의 뒤쪽에 요소를 추가한다.
console.log(fruits);
console.log(fruits.pop()); // 배열의 뒤에서 요소 추출
console.log(fruits.pop());
console.log(fruits);

// shift, push
fruits.push("Pear");
console.log(fruits);
console.log(fruits.shift()); // 맨 앞으로 부터 요소 추출
console.log(fruits.shift());
console.log(fruits.shift());
console.log(fruits);

// splice : delete + insert
fruits = ["Banana", "Orange", "Apple", "Mango"];
// 인자의 갯수 1개 : 해당 인덱스 ~ 끝까지 추출한 후 제거
console.log(fruits);
console.log(fruits.splice(2)); // 2번 인덱스 ~ 끝까지 추출 후 제거
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
// 인자의 갯수 2개 : 시작 인덱스, 갯수 추출 후 제거
console.log(fruits);
console.log(fruits.splice(2, 1)); // 2번 인덱스 ~ 1개 추출 후 제거
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
// 인자의 갯수 3개 이상 : 시작 인덱스, 갯수, 추가할 아이템들
console.log(fruits);
console.log(fruits.splice(2, 1, "Kiwi", "Pineapple"));
console.log(fruits);

// reverse, slice
fruits.reverse(); // 반전
console.log(fruits);
let slices = fruits.slice(1, 2); // start, end
console.log(slices);

// sort : 정렬 - 기본 오름차순 정렬
console.log(fruits);
fruits.sort(); // 오름차순 정렬
console.log("SORT ASC:", fruits);
fruits.sort(function(v1, v2){
    if (v1 < v2) return 1; // 양수 -> v1이 순서가 뒤다
    if (v1 > v2) return -1; // 음수 -> v1이 순서가 앞이다
    if (v1 == v2) return 0; // 0 -> 순서가 같다
});
console.log("SORT DESC:", fruits);