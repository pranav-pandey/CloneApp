var faker = require("faker");
module.exports = function() {
  var data = { users: [], message: [],photo: [user_id : users.id] }

  for (var i = 0; i < 10; i++) {
    data.users.push({ id: i, name: faker.name.findName()});
    data.message.push({ id: i, text: faker.lorem.sentence()});
    data.photo.push({ id: faker.random.number(), img: faker.image.image(), user_id: data.users.id });
  }
  return data
}
