import * as _ from "lodash";
async function hello() {
  return "world";
}

// code that uses type anitations//
_.pickBy();

//implicit//
let lucky: any = 23;
lucky = "23";

//make type from scratch//

type Style = "bold";
let font: Style;

//1. trying out a function, making x and y numbers//
function pow(x: number, y: number) {
  return Math.pow(x, y);
}

//2. then add string value as the arguments here...//
pow(5, 10);

//how to strongtype an arrey//
//here we get an error everytime we try to push a value that is not a number//

const arr: number[] = [];

arr.push(1);
arr.push("23"); //here you get an error becose we are trying to add a string//
arr.push(false); //here we get an error becose we are trying to add a booleen//

//typescript generics, T represents a varibe type that we can pass in to strongtype these observable internal values //

class Observable<T> {
  constructor(public value: T) {}
}
let x: Observable<number>;
let y: Observable<person>;
let z = new Observable(23);
