export {};

// boolean
let togolese: boolean = true;

// number
let age: number = 10;

// string
let fruit: string = "orange";

// array
let items: Array<string> = ["pen", "water", "ball"];

// object
let sport: object = {
  first: "soccer",
  second: "basketball"
};

// null and undefined
let score: undefined = undefined;
let money: null = null;

// tuple
let team: [string, string];
team = ["Madrid", "Spain"];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3
}
let sizeName: number = Size.Small;

// Any ----Be careful using it!!!!!!!!
let something: any = "nooooo!!!";
something = "";

// void
let sing = (): void => {
  console.log("hey");
};

// never
let error = (): never => {
  throw Error("ohhh!");
};

// Interface
interface RobotArmy {
  count: number;
  type: string;
  magic: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("Fight!");
};

// Same thing as thr above code
let fightRobotArmy2 = (robots: {
  count: number;
  type: string;
  magic: string;
}) => {
  console.log("Fight!");
};

// Type assertion
interface catArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as catArmy;

dog.count;

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log("heyyy");
};

let fightRobotArmy4 = (robots: {
  count: number;
  type: string;
  magic: string;
}): number => {
  console.log("heyy");
  return 4;
};

// Classes
class Animal {
  sing: string = "lalalaa";
  constructor(sound: string) {
    this.sing = sound;
  }

  greet(): string {
    return `Hi ${this.sing}`;
  }
}

let lion = new Animal("hahah");
lion.sing;

// Union
let confused: string | boolean | number = 5;
