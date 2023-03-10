import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

router.get('/', (req, res, next) => {
  try {
    const result = fighterService.getAllFighter();
    if (!result) {
      res.status(404).send( {message: 'Cannot find AllFighter'} )
    } else {
      res.send(result)
    }
  }
  catch ({message}) {
    return (res.send = {
      error: true,
      message: "Error found AllFighter"
    })
  } 
  finally {
    next();
  }
}, responseMiddleware) 

router.get('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    const result = fighterService.search({ id });
    if (!result) {
      res.status(404).send( {message: `Cannot find fighter with ${id}. Fighter not found`} )
    } else {
      res.send(result)
    }
  }
  catch ({message}) {
    return (res.send = {
      error: true,
      message: "Error found fighter"
    })
  } 
  finally {
    next();
  }
}, responseMiddleware)

router.post('/', createFighterValid, (req, res, next) => {
  try {
    const result = fighterService.createFighter( req.body );
    if (!result) {
      res.status(404).send( {message: 'Cannot create fighter user'} )
    } else {
      res.status(200).send(result)
    }
  }
  catch ({message}) {
    return (res.send = {
      error: true,
      message: "Error create fighter"
    })
  } 
  finally {
    next();
  }
}, responseMiddleware)

router.put('/:id', updateFighterValid, (req, res, next) => {
  try {
    const id = req.params.id;
    const result = fighterService.updateFighter( id, req.body );
    if (!result) {
      res.status(404).send( {message: `Cannot update fighter with this id: ${id}`} )
    } else {
      res.send(result)
    }
  }
  catch ({message}) {
    return (res.send = {
      error: true,
      message: "Error fighter not found"
    })
  } 
  finally {
    next();
  }
}, responseMiddleware)

router.delete('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    const result = fighterService.deleteFighter( id );
    if (!result) {
      res.status(404).send( {message: `Cannot delete fighter with this id: ${id}`} )
    } else {
      res.send(result)
    }
  }
  catch ({message}) {
    return (res.send = {
      error: true,
      message: "Error delete fighter"
    })
  } 
  finally {
    next();
  }
}, responseMiddleware)
// TODO: Implement route controllers for fighter

export { router };
