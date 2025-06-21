/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const images = WEB_TECH_IMAGES;
let currentIndex = 0;

// Находим элементы на странице
const imgElement = document.querySelector('#web-tech-image'); // предполагается, что тег <img> имеет id="web-tech-image"
const prevButton = document.querySelector('#web-tech-prev');
const nextButton = document.querySelector('#web-tech-next');

// Функция обновления изображения
function updateImage() {
  imgElement.src = images[currentIndex];
}

// Обработчик кнопки "назад"
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

// Обработчик кнопки "вперёд"
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

// Показываем первое изображение при загрузке
updateImage();

