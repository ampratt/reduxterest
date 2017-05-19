import fetch from 'isomorphic-fetch'
import faker from 'faker' // Faker.js

api.post  = {
    id:    random.special(4, 8),
    name:  faker.name.findName(),
    phone: faker.phone.phoneNumber("(###) ###-####"),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
    }
};

api.code  = faker.internet.password()
api.caption = faker.internet.userName();
api.likes = faker.internet.password();
api.id     = random.special(4, 8)
api.display_src    = phonenum();

{
      "code":"BAcyDyQwcXX",
      "caption":"Lunch #hamont",
      "likes":56,
      "id":"1161022966406956503",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg"
   }


// Custom user snippet to generate formatted phone numbers
var phonenum = require('keith/phonenum/1');

api.company  = faker.company.companyName();
api.username = faker.internet.userName();
api.password = faker.internet.password();
api.role     = list(['guest', 'user', 'administrator']);
api.phone    = phonenum();
api.cell     = phonenum(`(${list(['214', '469', '972'])}) xxx-xxxx`);

    fetch('http://localhost:3333/resorts/' + value)
        .then(response => response.json())
        .then(suggestions => {

            dispatch({
                type: C.CHANGE_SUGGESTIONS,
                payload: suggestions
            })

        })
        .catch(error => {

            dispatch(
                addError(error.message)
            )

            dispatch({
                type: C.CANCEL_FETCHING
            })

        })