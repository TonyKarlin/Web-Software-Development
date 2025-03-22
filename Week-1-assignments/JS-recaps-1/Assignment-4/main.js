function calculateGrade() {
  const scoreElm = document.getElementById('score');
  const score = parseInt(scoreElm.value);

  let grade;
  if (score < 100 && score >= 88) grade = 5;
  else if (score < 88 && score >= 76) grade = 4;
  else if (score < 76 && score >= 64) grade = 3;
  else if (score < 64 && score >= 52) grade = 2;
  else if (score < 52 && score >= 40) grade = 1;
  else grade = '0';

  if (score < 0 || score > 100) grade = null;

  if (grade !== null && grade !== isNaN) {
    document.getElementById('result').innerHTML =
      'Grade: <strong>' + grade + '</strong>';
  } else {
    document.getElementById('result').innerHTML = 'Invalid score';
  }
}
