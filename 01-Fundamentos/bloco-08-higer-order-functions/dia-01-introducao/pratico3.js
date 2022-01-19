const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verification = (gab, checks) => {
  if (checks === gab) {
    return 1;
  }
  if (checks === 'N.A') {
    return 0;
  }
  return -0.5;
};
const finalScore = (gab, checks, action) => {
  let count = 0;
  for (let i = 0; i < checks.length; i += 1) {
    const valueReturn = action(gab[i], checks[i]);
    count += valueReturn;
  }
  return count;
};

console.log(finalScore(RIGHT_ANSWERS, STUDENT_ANSWERS, verification));
