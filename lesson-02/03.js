// Проверяем, что переменная score определена, если нет, присваиваем ей значение
let score = typeof score !== "undefined" ? score : 45;  // Если score не определена, присваиваем 45

let grade;

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

console.log(grade);  // Выводим результат, например, для тестирования
