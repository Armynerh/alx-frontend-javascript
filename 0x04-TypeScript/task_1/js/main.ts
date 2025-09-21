// teacher.ts

interface Teacher {
  readonly firstName: string;        // only settable at initialization
  readonly lastName: string;         // only settable at initialization
  fullTimeEmployee: boolean;         // always defined
  yearsOfExperience?: number;        // optional
  location: string;                  // always defined
  [propName: string]: any;           // allow any extra properties
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,   // extra attribute allowed
};

console.log(teacher3);
