function calculateGrade() {
  // Step 1: Collect input from user
  let subject1 = parseInt(prompt("Enter marks for Subject 1:"));
  let subject2 = parseInt(prompt("Enter marks for Subject 2:"));
  let subject3 = parseInt(prompt("Enter marks for Subject 3:"));
  let subject4 = parseInt(prompt("Enter marks for Subject 4:"));
  let subject5 = parseInt(prompt("Enter marks for Subject 5:"));

  // Step 2: Calculate total
  let total = subject1 + subject2 + subject3 + subject4 + subject5;

  // Step 3: Calculate average
  let average = total / 5;

  // Step 4: Decide grade
  let grade;
  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Step 5: Show results
  alert("Total Marks: " + total +
        "\nAverage: " + average +
        "\nGrade: " + grade);
}
