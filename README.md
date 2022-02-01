# SliderPlugin

[Пример реализации](https://barghest0.github.io/MetaLampSliderPlugin/dist/)

## Команды

Команды могут осуществлятсья с помощью `npm` или `yarn` пакетных менеджеров:

-   Установка зависимостей - `npm i` или `yarn install`

-   Запуск сервера для разработки - `npm run dev` или `yarn dev`

-   Сборка проекта - `npm run build` или `yarn build`

-   Запуск тестов jest - `npm run test` или `yarn test`

-   Процентное покрытие тестами - `npm run test:coverage` или `yarn test:coverage`

## Создание слайдера

Инициализация:

```javascript
const slider = new Slider(".slider", {});
```

Параметры:

| Параметр      | Тип                     | Значение по умолчанию | Описание                                           |
| ------------- | ----------------------- | --------------------- | -------------------------------------------------- |
| min           | number                  | 0                     | Минимальное значение                               |
| max           | number                  | 100                   | Максимальное значение                              |
| step          | number                  | 1                     | Шаг бегунка                                        |
| value         | number / number[]       | 0                     | Значение первого бегунок                           |
| isRange       | boolean                 | false                 | Создание 2 бегунка                                 |
| idDecimal     | boolean                 | false                 | Добавление к значению десятичной части             |
| decimalPlaces | number                  | 0                     | Количество цифр после запятой                      |
| direction     | 'horizontal'/'vertical' | 'horizontal'          | Направление слайдера (горизонтальное/вертикальное) |
| hasScale      | boolean                 | true                  | Отображение шкалы                                  |
| hasTips       | boolean                 | true                  | Отображение подсказок над бегунками                |
| hasFill       | boolean                 | true                  | Отображение прогресс бара                          |

## Архитектура

![UML](uml.png)
