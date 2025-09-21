
// ==========================
// Teacher interface
// ==========================
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

// ==========================
// Student interface and class
// ==========================
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage of StudentClass
const student1 = new StudentClass("Alice", "Johnson");
console.log(student1.displayName());        // Alice
console.log(student1.workOnHomework());     // Currently working
