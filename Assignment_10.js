function groupStudentsByName(students) {
    const groupedStudents = {};

    students.forEach(student => {
        if (!groupedStudents[student.name]) {
            groupedStudents[student.name] = [];
        }
        groupedStudents[student.name].push(student);
    });

    return groupedStudents;
}

// Example usage:
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Alice", age: 23 },
    { name: "Charlie", age: 21 },
];

console.log("Grouped Students:", groupStudentsByName(students));//Grouped Students: {
   // Alice: [ { name: 'Alice', age: 20 }, { name: 'Alice', age: 23 } ],
   // Bob: [ { name: 'Bob', age: 22 } ],
   // Charlie: [ { name: 'Charlie', age: 21 } ]
