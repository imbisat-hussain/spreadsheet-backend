const fs = require('fs');


const db = require("./app/models");
const Tutorial = db.tutorials;
let rawdata = fs.readFileSync('./data.json');
let student = JSON.parse(rawdata);
student.map(async (res, index) => {
    const tutorial = {
        title: res.title,
        description: res.description,
        // published: res.body.published ? res.body.published : false
      };
      Tutorial.create(tutorial)
    .then(data => {

      console.log(data)

    //   res.send(data);
    })
    .catch(err => {
      console.log(err)
    });
    // await queryInterface.bulkCreate('Users', [{
    //   firstName : res.title,
    //   lastName : res.description,
    //   age : res.price,
    //   createdAt : new Date(),
    //   updatedAt : new Date()
    //   // email : 'johnDoe@test.com'
    // }], {});
  });