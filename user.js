const dynamoose = require('dynamoose');
// dynamoose config
const ddb = new dynamoose.aws.ddb.DynamoDB({
    region: "us-east-1",
    endpoint: "http://localhost:8000",
    apiVersion: 'latest',
    credentials: {
      accessKeyId: 'MY_ACCESS_KEY',
      secretAccessKey: 'MY_SECRET_KEY'
    }
  });
  
dynamoose.aws.ddb.set(ddb);
  
dynamoose.aws.ddb.local();
  

const userSchema = new dynamoose.Schema({
    id: {type: String, hashKey: true},
    userId: {type: String, required: true},
    query: {type: String, required: true}
});

const user = dynamoose.model('usersLog', userSchema);

module.exports = {user};
