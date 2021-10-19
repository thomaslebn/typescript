// Basic Types
let id: number = 5
let company: string = 'Company'
let isPublished: boolean = true
let x: any = 'Hello'
x = true
let age: number
age = 25

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, 'Thomas', true]

// Tuple
let person: [number, string, boolean] = [10, 'Thomas', true]
// Tuple Array
let employee: [number, string][]
employee = [
    [10, 'Thomas'],
    [20, 'John']
]

// Union
let pid: string | number = 22; // Or

// Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Up) // 0
console.log(Direction1.Down) // 1, etc...

// Objects

type User = {
    id: number,
    name: string
}

const User: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
let customerId = <number>cid
// let customerId = cid as number - another way

// Functions
const addNum = (x: number, y: number): number => { // return value
    return x + y
}

const log = (message: string | number): void => {
    console.log(log);
}

// Interfaces - Custom type for object
interface UserInterface {
    readonly id: number, // can't access outside the object
    name: string,
    age?: number // optional
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

type Point = number | string // interface doesn't work with union
const p1: Point = 1

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x, y): number => x + y
const sub: MathFunc = (x, y): number => x - y

// Class, Interface in class

interface PersonInterface {
    id: number,
    name: string,

    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is register`
    }
}

const person1 = new Person(1, 'Thomas')
person1.register() // Thomas is now register

// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(2, 'John', 'Dev')
emp.register() // John is register

// Generics - reusable component
const getArray = <T>(items: T[]): T[] => {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4, 5])
let strArray = getArray<string>(['Thomas', 'John'])

numArray.push(6) // true
console.log(numArray)
// numArray.push('6') - false
