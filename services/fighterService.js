import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  getAllFighter() {
    const item = fighterRepository.getAll();
    if (!item) {
      return null;
    }
    return item;
  }

  createFighter(data) {
    const USER1 = {
      name: data.name,
      power: data.power,
      defense: data.defense,
      health: data.health,
    };
    return fighterRepository.create(USER1);
  }

  updateFighter(id, dataToUpdate) {
    const item = fighterRepository.update(id, dataToUpdate);
    if (!item) {
      return null;
    }
    return item;
  }

  deleteFighter(id) {
    const item = fighterRepository.delete(id);
    if ( item.length < 1) {
      return null;
    }
    return item;
  }

  search(search) {
    const item = fighterRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
  // TODO: Implement methods to work with fighters
}

const fighterService = new FighterService();

export { fighterService };
