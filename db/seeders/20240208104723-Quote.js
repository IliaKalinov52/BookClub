/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Quotes', [
      {
        content: '"Человек в наше время - как бумажная салфетка: в неё сморкаются, комкают, выбрасывают, берут новую, сморкаются, комкают, бросают.."',
        author: 'Рэй Брэдбери',
        bookName: '"451 по Фаренгейту"',
      },
      {
        content: '"Совсем не знак бездушья - молчаливость. Гремит лишь то, что пусто изнутри."',
        author: 'Уильям Шекспир',
        bookName: '"Король Лир"',
      },
      {
        content: '"Не следует затевать ссор с женщиной, в которой пробудились материнские чувства. На ее стороне вся мораль мира."',
        author: 'Эрих Мария Ремарк',
        bookName: '"Три товарища"',
      },
      {
        content: '"Пока человек не сдаётся, он сильнее своей судьбы."',
        author: 'Эрих Мария Ремарк',
        bookName: '"Три товарища"',
      },
      {
        content: '"Люби своих врагов хотя бы для того, чтобы действовать им на нервы."',
        author: 'Бернар Вербер',
        bookName: '"Империя ангелов"',
      },
      {
        content: '"Нужно уметь закрывать скучную книгу...уходить с плохого фильма...и расставаться с людьми, которые не дорожат тобой!"',
        author: 'Александр Грин',
        bookName: '"Алые паруса"',
      },
      {
        content: '"Даже остановившиеся часы два раза в день показывают точное время"',
        author: 'Стивен Кинг',
        bookName: '"Зеленая миля"',
      },
      {
        content: '"Когда человеку семнадцать, он знает все. Если ему двадцать семь и он по-прежнему знает все - значит, ему все еще семнадцать"',
        author: 'Рэй Бредбери',
        bookName: '"Вино из одуванчиков"',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Quotes', null, {});
  },
};
