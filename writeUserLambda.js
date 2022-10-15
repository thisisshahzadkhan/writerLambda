const { user } = require('./user');
const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
    try {
        // console.log('here i am', event);
        // return {};
        if (event?.senderId === undefined || event?.query === undefined)
          throw 'Sender ID or Query should not be empty';
        console.log('here ', event.senderId, event.query);
        
        let newUser = new user({
          id: uuidv4(),
          userId: event.senderId+'',
          query: event.query
        });
        console.log(newUser);
        await newUser.save();
        return newUser;
      } catch (error) {
        return error;
      }
    
  }