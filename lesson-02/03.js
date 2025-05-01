// Проверим, что переменная score определена перед использованием
let grade;
if (typeof score === "undefined") {
  // Если score не определена, инициализируем её значением по умолчанию
  score = 0;  // Здесь можно задать любое значение для теста, например, 0 или 45 для теста F.
}

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

// Пример использования этой переменной в дальнейшем
const studentCodeWithoutDeclarations = (0, removeOriginalDeclarations_1.removeOriginalDeclarations)(this.studentCode, ['score']);
const testCode = `let score = ${score}; ${studentCodeWithoutDeclarations} return grade;`;
const executeScript = new Function(testCode);
const gradeResult = executeScript();

// Проверка в тестах Cypress
(0, local_cypress_1.expect)(gradeResult).to.equal(expectedGrade);
