/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'The Paper Palace',
        author: 'Miranda Cowley',
        img: 'https://images.ctfassets.net/trjuzxu9ir9c/6CMZ2r5RSU0pypC8e1TMgu/849dd1ea51377869f650129c299bb64d/50.The_Paper_Palace_Reese_Book_Club.jpg?w=1838&h=2775&q=100',
        month: 'Jan 2023',
      },
      {
        title: 'Seven Days in June',
        author: 'Tia Williams',
        img: 'https://images.ctfassets.net/trjuzxu9ir9c/7JHyAmvZDPjcdryrP73uAP/b71cb517ce56fdba5fa0d0f73e0f6b47/49.SevenDaysinJune.jpg?w=1841&h=2776&q=100',
        month: 'Feb 2023',
      },
      {
        title: 'You have a match',
        author: 'Emma Lord',
        img: 'https://images.ctfassets.net/trjuzxu9ir9c/66FXyoCcqd7KM5DMrlc8ML/749da18f09fb30fea128733a3f6a71a0/YA6.YouHaveaMatch_RBC_.jpg?w=1650&h=2550&q=100',
        month: 'Mar 2023',
      },
      {
        title: 'The chicken Sisters',
        author: 'KJ Dell Antonia',
        img: 'https://images.ctfassets.net/trjuzxu9ir9c/B6mf50eki2EmtuIkLRmCh/df701fecbb4fe04d30d179f7f627689f/43._chicken_sisters.jpg?w=1650&h=2475&q=100',
        month: 'Apr 2023',
      },
      {
        title: 'Outlawed',
        author: 'Anna North',
        img: 'https://images.ctfassets.net/trjuzxu9ir9c/2lT00CHzSWxmqYHN6Mtuif/61118160b5f848663cc701dc9673d03b/44.outlawed.jpg?w=1875&h=2850&q=100',
        month: 'May 2023',
      },
      {
        title: 'Group',
        author: 'Christie Tate',
        img: 'https://images.ctfassets.net/trjuzxu9ir9c/4LZ3IXVnMYRoHQ06aY4bi2/b2ef6a87a73e02382c2c68f8aa746ee2/42.group.jpg?w=1837&h=2775&q=100',
        month: 'Jun 2023',
      },
      {
        title: 'His Only Wife',
        author: 'Peace Adzo Medie',
        img: 'https://images.ctfassets.net/trjuzxu9ir9c/5H62mNzeNlr5CiObw5mJlI/3e11e4dfd75f86001a2b19ac47f1a99c/41.his_only_wife.jpeg?w=1242&h=1875&q=100',
        month: 'Jul 2023',
      },
      {
        title: 'Untamed',
        author: 'Glennon Doyle',
        img: 'https://images.ctfassets.net/trjuzxu9ir9c/3reiwQZyT0vdGipNaGyu90/15229aa75f23cbb9bd004bd72e895e3d/35.UNTAMED__RBC_seal.jpg?w=1686&h=2552&q=100',
        month: 'Aug 2023',
      },
      {
        title: 'The Other Woman',
        author: 'Sandie Jones',
        img: 'https://images.ctfassets.net/trjuzxu9ir9c/SUzBJC8XCgnXpHQPrx3JN/b217464ec615ae14b1ddb86368f7d590/18.the-other-woman-high-res-paperback.jpg?w=1613&h=2475&q=100',
        month: 'Sep 2023',
      },
      {
        title: 'Happiness',
        author: 'Heather Harpham',
        img: 'https://images.ctfassets.net/trjuzxu9ir9c/7u4k5t2g9DK4edUNx9yTrK/3009ea66593f014196a7a5e51bf07f18/11.Happiness_-_Heather_Harpham_-_Hardcover.jpg?w=1875&h=2850&q=100',
        month: 'Oct 2023',
      },
      {
        title: 'The Proposal',
        author: 'Jasmine Guillory',
        img: 'https://images.ctfassets.net/trjuzxu9ir9c/2IiTeLrUcXYo4fo1tPehPE/c3a94ff9fc2e11a7d2eb1a492ca8623f/21.The_Proposal__book_cover_with_RBC_seal_.jpg?w=486&h=729&q=100',
        month: 'Nov 2023',
      },
      {
        title: 'The Cactus',
        author: 'Sarah Haywood',
        img: 'https://images.ctfassets.net/trjuzxu9ir9c/7rRPISUOcNmo8wZemKNAsa/e163a9a4d34c136e7771677c0c9ce00d/25.Cactus.jpg?w=1594&h=2400&q=100',
        month: 'Dec 2023',
      },
      {
        title: 'Fair Play',
        author: 'Eve Rodsky',
        img: 'https://images.ctfassets.net/trjuzxu9ir9c/4cY2qBTCEOHFFS8U9Zff6r/885babbe78bae3604cc644926b7b73ef/29._fair_play.jpg?w=486&h=734&q=100',
        month: 'Jan 2024',
      },
      {
        title: 'Honor',
        author: 'Thrity Umrigar',
        img: 'https://images.ctfassets.net/trjuzxu9ir9c/4TDpZhyiLABApwy3pOfAAf/a3b694e4140b5008be66b2255e5c886d/56.Honor.jpg?w=1836&h=2771&q=100',
        month: 'Feb 2024',
      },
    ], {});
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
