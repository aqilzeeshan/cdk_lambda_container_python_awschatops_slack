const faker = require('faker')
module.exports.lambdaHandler = async (event, context) => {
    return faker.helpers.userCard();
}