const { user } = require('./user');
const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
    try {
        if (event?.senderId === undefined || event?.query === undefined)
          throw 'Sender ID or Query should not be empty';
        let newUser = new user({
          id: uuidv4(),
          userId: event.senderId+'',
          query: event.query
        });
        console.log(newUser);
        await newUser.save();
        return newUser;
      } catch (error) {
        console.log(error);
        return error;
      }
}