// 논리형 (Boolean)
// 비교/논리 연산의 결과 -> true or false
// 논리의 조합은 AND(&&), OR(||), NOT(!)으로 조합
let v1; // 선언만 했고, 초기화되지 않았다. -> undefined
let v2 = null // null 로 초기화 된것이다.
console.log(typeof v1, typeof v2);
console.log(v2, typeof v2, v2 == null);

// undefined : 자바스크립트 인터프리터에게 허용된 타입
// null : 프로그래머가 임의로 설정하는 값

// undefined도 개발자가 설정해 줄 수 있는 값이다.
v2 = undefined
console.log(v2, typeof v2, v2 == undefined); //undefined 인지 확인

// == vs ===
// == : 타입과 관계 없이 값만 비교
// === : 타입과 함께 값도 비교(Strict)
console.log(2022 == "2022"); // 단순 값 비교
console.log(2022 === "2022"); // 값과 타입도 비교 -> 추천

// Boolean 객체를 이용한 논리값
// number, string이 비어 있으면 false, 내용이 있으면 true
console.log(Boolean("Java"), Boolean(""));
console.log(Boolean(2022), Boolean(0)); // number

// React, Vue.js
console.log(true && "JavaScript"); // JavaScript
console.log(false && "JavaScript"); // false

console.log(true || "JavaScript"); // true
console.log(false || "JavaScript"); // JavaScript
