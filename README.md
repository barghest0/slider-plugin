# SliderPlugin

[Пример реализации](https://barghest0.github.io/MetaLampSliderPlugin/dist/)

## Создание 
Инициализация:

```
const slider = new Slider('.slider',{})
```
Параметры:

| Параметр        | Тип                     | Значение по умолчанию         | Описание                                                              |
| --------------- | ------------------------|-------------------------------| ----------------------------------------------------------------------|
| min             | number                  | 0                             | Минимальное значение                                                  |
| max             | number                  | 100                           | Максимальное значение                                                 |
| step            | number                  | 1                             | Шаг бегунка                                                           |
| value           | number / number[]       | 0                             | Значение первого бегунок                                              |
| isRange         | boolean                 | false                         | Создание 2 бегунка                                                    |
| idDecimal       | boolean                 | false                         | Добавление к значению десятичной части                                |
| decimalPlaces   | number                  | 0                             | Количество цифр после запятой                                         |
| direction       | 'horizontal'/'vertical' | 'horizontal'                  | Определяет направление слайдера (горизонтальное/вертикальное)         |
| hasScale        | boolean                 | true                          | Отображение шкалы                                                     |
| hasTips         | boolean                 | true                          | Отображение подсказок над бегунками                                   |
| hasFill         | boolean                 | true                          | Отображение прогресс бара                                             |