
const dateNow = Date.now();

export const users = {
  newUser: {
    name: "Didi",
    email: `didi${dateNow}@example.com`,
    password: "Didi123",
  },

  existingUser: {
    email: "didi.playwright@example.com",
    password: "Didi123",
  },

  invalidUser: {
    email: "didi.playwright@example.com",
    password: "Wrong123",
  },
};
////



// export const users = {
//   registeredUser: {
//     email: "didi.playwright@example.com",
//     password: "Didi123",
//   },

//   unregisteredUser: {
//     email: "new@example.com",
//     password: "Didi123",
//   },

//   wrongPassword: "Wrong123",
// };


//****************************** */


// и после:

// await page.locator('[data-qa="login-email"]')
//   .fill(users.registeredUser.email);

// await page
//   .locator('[data-qa="login-email"]')
//   .fill(users.unregisteredUser.email);

//Така имаш само един източник на истината (single source of truth) за регистрирания потребител.
//Иначе така:

//   registeredUser: {
//     email: "didi.playwright@example.com",
//     password: "Didi123",
//   },
//     unregisteredUser: {
//     email: "new@example.com",
//     password: "Didi123",
//   },

//   userWithWrongPassword: {
//     email: "didi.playwright@example.com",
//     password: "Wrong123",
//   },
// };

// await page.locator('[data-qa="login-email"]')
//   .fill(users.registeredUser.email);

// await page.locator('[data-qa="login-password"]')
//   .fill(users.wrongPassword);

 //////////////////
//ако файлът е: tests/auth/02.login-valid-user.spec.ts  Импортът е:
//import { users } from "../data/users";

// import { users } from "../data/users";

/////////////
//*********** */
// Register User
// const uniqueEmail = `didi${Date.now()}@example.com`;

// Delete Account
// const uniqueEmail = `didi${Date.now()}@example.com`;

// Login тестове
// users.registeredUser.email
// users.registeredUser.password

// Така имаш:

// стабилен фиксиран потребител за login сценарии;
// винаги нов потребител за register/delete сценарии;
// без нужда да променяш пароли или данни след всеки run.
