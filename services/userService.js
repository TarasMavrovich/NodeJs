import { userRepository } from "../repositories/userRepository.js";

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

    return userRepository.create(USER)
  }

  updateUser(id, dataToUpdate) {
    const item = this.search({id})
    if(item){
      return userRepository.update(id,dataToUpdate)
    } else {
        return null
    }
  }

  deleteUser(id) {
    const item = userRepository.delete(id);
    if ( item.length < 1) {
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
