// ==========================
// Director and Teacher Interfaces
// ==========================

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// ==========================
// Director Class
// ==========================

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// ==========================
// Teacher Class
// ==========================

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// ==========================
// createEmployee Function
// ==========================

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "string") {
    salary = parseInt(salary);
  }
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// ==========================
// isDirector Type Predicate
// ==========================

export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// ==========================
// executeWork Function
// ==========================

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// ==========================
// Subjects String Literal Type & teachClass Function
// ==========================

type Subjects = 'Math' | 'History';

// teachClass function with exact parameter type formatting
function teachClass(todayClass:Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}


// ==========================
// Example Usage
// ==========================

console.log(executeWork(createEmployee(200)));    // Getting to work
console.log(executeWork(createEmployee(1000)));   // Getting to director tasks

console.log(teachClass('Math'));      // Teaching Math
console.log(teachClass('History'));   // Teaching History
