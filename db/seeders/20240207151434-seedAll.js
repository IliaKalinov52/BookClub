const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // username: DataTypes.STRING,
    // email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // isAdmin: DataTypes.BOOLEAN,
    await queryInterface.bulkInsert('Users', [
      {
        username: 'qwerty',
        email: 'qwerty@buffmail.com',
        password: await bcrypt.hash('123', 10),
        isAdmin: false,
      },
      {
        username: 'john',
        email: 'john@buffmail.com',
        password: await bcrypt.hash('123', 10),
        isAdmin: false,
      },
      {
        username: 'ShrekEnjoyer',
        email: 'shrek@buffmail.com',
        password: await bcrypt.hash('123', 10),
        isAdmin: false,
      },
      {
        username: 'bookLover228',
        email: 'bookLover228@buffmail.com',
        password: await bcrypt.hash('admin', 10),
        isAdmin: true,
      },
    ]);
    await queryInterface.bulkInsert('Boxes', [
      {
        title: 'Gift Box 1',
        description: 'something',
        price: '12.99',
        img: 'https://m.media-amazon.com/images/I/51fgzRAZiRL.jpg',
      },
      {
        title: 'Gift Box 2',
        description: 'some shit',
        price: '2.99',
        img: 'https://thelittlefinewinecompany.co.uk/wp-content/uploads/2023/01/black-box--e1674916190960.png',
      },
      {
        title: 'Spring Box',
        description: 'spring shit',
        price: '23.00',
        img: 'https://i.pinimg.com/564x/a3/47/b4/a347b4c0ae77c5e0dc6be9e14f01a759.jpg',
      },
      {
        title: 'Winter Box',
        description: 'winter stuff',
        price: '15.50',
        img: 'https://www.ukweddingfavours.co.uk/media/image/12230/red-snowflake-xmas-gift-box.jpg',
      },
      {
        title: 'Autumn Box',
        description: 'autumn stuff',
        price: '88.88',
        img: 'https://barrango.com/wp-content/uploads/2016/04/24-inch-glitter-gift-box-with-removable-bow-1024x1024.jpg',
      },
      {
        title: 'Summer Box',
        description: 'summer stuff',
        price: '88.88',
        img: 'https://w7.pngwing.com/pngs/696/352/png-transparent-christmas-gift-giftbox-miscellaneous-lid-box-thumbnail.png',
      },
      {
        title: 'Shrek Box',
        description: 'shrek is love stuff',
        price: '44.55',
        img: 'https://images.adagio.com/images2/custom_blends/72756.jpg',
      },
    ]);
    await queryInterface.bulkInsert('Carts', [
      {
        userId: 1,
        boxId: 3,
      },
      {
        userId: 1,
        boxId: 4,
      },
      {
        userId: 1,
        boxId: 5,
      },
      {
        userId: 1,
        boxId: 4,
      },
      {
        userId: 2,
        boxId: 2,
      },
      {
        userId: 2,
        boxId: 2,
      },
      {
        userId: 3,
        boxId: 7,
      },
    ]); await queryInterface.bulkInsert('Orders', [
      {
        userId: 1,
        status: 'Pending',
        person: 'Tom Cruise',
      },
      {
        userId: 1,
        status: 'Awaiting confirmation',
        person: 'Tom Cruise',
      },
      {
        userId: 2,
        status: 'Pending',
        person: 'Tom Cruise',
      },
      {
        userId: 3,
        status: 'Awaiting confirmation',
        person: 'Tom Cruise',
      },
    ]);
    await queryInterface.bulkInsert('Order_Items', [
      {
        orderId: 1,
        boxId: 1,
      },
      {
        orderId: 1,
        boxId: 2,
      },
      {
        orderId: 1,
        boxId: 3,
      },
      {
        orderId: 2,
        boxId: 2,
      },
      {
        orderId: 3,
        boxId: 4,
      },
      {
        orderId: 4,
        boxId: 7,
      },
      {
        orderId: 4,
        boxId: 7,
      },
      {
        orderId: 4,
        boxId: 7,
      },
      {
        orderId: 4,
        boxId: 7,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
