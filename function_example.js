function getAvarage(assignment1, assignment2, assignment3) {
  const total = assignment1 + assignment2 + assignment3;
  const avg = total / 3;
  return avg;
}

var assignmentMarks = getAvarage(49, 60, 59);
console.log(assignmentMarks);
