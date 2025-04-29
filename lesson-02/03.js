const score = 70; // тестовое значение, можно изменять
let grade;

if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 80 && score < 90) {
    grade = 'B';
} else if (score >= 70 && score < 80) {
    grade = 'C';
} else if (score >= 50 && score < 70) {
    grade = 'D';
} else if (score >= 0 && score < 50) {
    grade = 'F';
} else {
    grade = 'Неверный балл'; // на случай, если балл вне диапазона
}

console.log(grade);