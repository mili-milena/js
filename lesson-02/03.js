// Объявление переменной grade только один раз
let grade;

// Присваиваем значение переменной grade в зависимости от score
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
    grade = 'Invalid';
}

// Здесь продолжаем работу с переменной grade, не создавая её заново
const testCode = `let score = ${score}; ${studentCodeWithoutDeclarations} return grade;`;

// Создаем новую функцию с помощью new Function и выполняем её
const executeScript = new Function(testCode);

// Получаем результат
const gradeResult = executeScript();

// Проверка результата в Cypress (предположительно)
(0, local_cypress_1.expect)(gradeResult).to.equal(expectedGrade);
