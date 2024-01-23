'use strict';
const fs = require('fs')
const bcrypt = require('bcryptjs');

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
    let data = JSON.parse(fs.readFileSync('./db/user.json'))
    data = data.map(el => {
      el.password = bcrypt.hashSync(el.password, 8)
      el.updatedAt = el.createdAt = new Date()
      return el
    })

    let book = JSON.parse(fs.readFileSync('./db/book.json'))
    book = book.map(el => {
      el.updatedAt = el.createdAt = new Date()
      return el
    })

    await queryInterface.bulkInsert('Users', data, {})
    await queryInterface.bulkInsert('Books', book)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('Books', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
