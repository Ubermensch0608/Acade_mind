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

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course: string | number = "React - The Complete Guide";
course = 12341;
// let course: string = "React - The Complete Guide";
// type을 따로 지정해주지 않으면, 가장 먼저 배정된 값이 그 변수의 type으로 취급됨
