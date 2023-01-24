import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  const reqFighter = {
    name: req.body.name,
    power: req.body.power,
    defense: req.body.defense,
  }
  const reqFighter1 = {
    name: req.body.name,
    health: req.body.health,
    power: req.body.power,
    defense: req.body.defense,
  }

  if (!req.body.name || !req.body.power || !req.body.defense) {
    res.status(400).send( { message: 'All fields must be filled' })
}
  // TODO: Implement validatior for FIGHTER entity during creation
  next();
};

const updateFighterValid = (req, res, next) => {
  if (req.body.name || req.body.power || req.body.health || req.body.defense) {
    next();
  } else {
    res.status(400).send( { message: 'When updating fighter, there must be at least one field' } )
  }
  // TODO: Implement validatior for FIGHTER entity during update
  next();
};

export { createFighterValid, updateFighterValid };
