
// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [propName: string]: any;
}

// Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Function type interface for printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of printTeacher using function keyword + destructuring
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe

// Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// StudentClass implementing Student
class StudentClass implements Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;

  constructor(firstName: string, lastName: string, age: number, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Example usage
const student1 = new StudentClass("Alice", "Johnson", 21, "Toronto");
console.log(student1.displayName());  // Alice Johnson
console.log(student1.workOnHomework()); // Currently working
