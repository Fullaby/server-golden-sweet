'use strict';
const fs= require('fs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data= JSON.parse(fs.readFileSync('./data.json','utf-8')).data
   data.forEach(el=>{
    el.createdAt=el.updatedAt = new Date()
   })
   await queryInterface.bulkInsert("dataCollections",data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
   await queryInterface.bulkDelete("dataCollections",null)
  }
};
