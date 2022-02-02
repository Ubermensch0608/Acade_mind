// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = "Jongwon";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

// Type inference
let course: string | number = "React - The Complete Guide";
course = 12341;
// let course: string = "React - The Complete Guide";
// type을 따로 지정해주지 않으면, 가장 먼저 배정된 값이 그 변수의 type으로 취급됨

// Union Type  ex) string | number

// Type Aliases
// type을 임의로 정의할 수 있는 TypeScript의 확장 기능
// ex)  type Person = {
//     name: string;
//     age: number;
// }
// 위와 같이 Person이라는 type을 정의하게 되면
// Person은 object로서 name: string, age: number의 묶음 type을 가지게 된다.
// 이후 비슷한 변수를 정의할 때 type을 계속해서 설정할 필요 없이,
// Person을 type으로 지정하는 것만으로 위와 같은 type 정의가 적용된다.
// ex) let people: Person[]; => people이라는 변수는
// 위에서 정의한 Person이라는 type을 가지고, 이는 array로 나열되어야함

//Functions & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}
