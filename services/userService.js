import { userRepository } from "../repositories/userRepository.js";
const REGEXP_PHONE = /(^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2})$/g;
const REGEXP_EMAIL= /(^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6})$/g

class UserService {
  getAllUsers() {
    const item = userRepository.getAll();
    if (!item) {
      return null;
    }
    return item;
  }

  createUser(data) {
    const USER = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password
    };
    return userRepository.create(USER);
  }

  updateUser(id, dataToUpdate) {
    const item = userRepository.update(id, dataToUpdate);
    if (!item) {
      return null;
    }
    return item;
  }

  deleteUser(id) {
    const item = userRepository.delete(id);
    if ( item.length < 1) {
      return null;
    }
    return item;
  }

  checkEmailUser(email) {
    const item = REGEXP_EMAIL.test(email);
    if (!item) {
      return null;
    }
    return item;
  }

  checkPhoneUser(phoneNumber) {
    const item = REGEXP_PHONE.test(phoneNumber);
    if (!item) {
      return null;
    }
    return item;
  }
  // TODO: Implement methods to work with user

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

const userService = new UserService();

export { userService };
