// склонение слов - declOfNumber(1, ['минута', 'минуты', 'минут']); // вернёт — минута
export const declOfNumber = (number, words) => words[
  (number % 100 > 4 && number % 100 < 20)
    ? 2
    : [2, 0, 1, 1, 1, 2][
      (number % 10 < 5)
        ? number % 10
        : 5]
  ];
