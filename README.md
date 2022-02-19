# slider-plugin

[Пример реализации](https://barghest0.github.io/slider-plugin/dist)

## Команды

Команды могут осуществлятсья с помощью `npm` или `yarn` пакетных менеджеров:

- Установка зависимостей - `npm i` или `yarn install`

- Запуск сервера для разработки - `npm run dev` или `yarn dev`

- Сборка проекта - `npm run build` или `yarn build`

- Деплой github pages - `npm run build` или `yarn build`

- Запуск тестов jest - `npm run test` или `yarn test`

- Процентное покрытие тестами - `npm run test:coverage` или `yarn test:coverage`

## Создание слайдера

Инициализация:

```javascript
const slider = new Slider('.slider', {});
```

Пользовательские параметры:

| Параметр      | Тип                     | Значение по умолчанию | Описание                                           |
| ------------- | ----------------------- | --------------------- | -------------------------------------------------- |
| min           | number                  | 0                     | Минимальное значение                               |
| max           | number                  | 100                   | Максимальное значение                              |
| step          | number                  | 1                     | Шаг бегунка                                        |
| value         | number / number[]       | 0                     | Значение бегунков                                  |
| isRange       | boolean                 | false                 | Создание 2 бегунка                                 |
| idDecimal     | boolean                 | false                 | Добавление к значению десятичной части             |
| decimalPlaces | number                  | 0                     | Количество цифр после запятой                      |
| direction     | 'horizontal'/'vertical' | 'horizontal'          | Направление слайдера (горизонтальное/вертикальное) |
| hasScale      | boolean                 | true                  | Отображение шкалы                                  |
| hasTips       | boolean                 | true                  | Отображение подсказок над бегунками                |
| hasFill       | boolean                 | true                  | Отображение прогресс бара                          |

Альтернативный вариант установки параметров через `data` атрибуты:

```html
<div
  class="slider"
  data-min-value="-100"
  data-is-range="true"
  data-first-value="-10"
  data-second-value="10"
></div>
```

## Архитектура

![UML](uml.png)
