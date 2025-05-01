// Инициализация переменной score до использования
var score = 45; // Устанавливаем начальное значение

var grade;

if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 80 && score <= 89) {
    grade = 'B';
} else if (score >= 70 && score <= 79) {
    grade = 'C';
} else if (score >= 50 && score <= 69) {
    grade = 'D';
} else if (score >= 0 && score <= 49) {
    grade = 'F';
} else {
    grade = 'Invalid';  // Если score выходит за пределы 0-100
}

console.log(grade);  // Выводим результат
