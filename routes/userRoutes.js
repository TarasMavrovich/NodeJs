import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.get('/', (req, res, next) => {
  try {
    const result = userService.getAllUsers();
    if (!result) {
      res.status(404).send( {message: 'Cannot find AllUser'} )
    } else {
      res.send(result)
    }
  }
  catch ({message}) {
    return (req.body = {
      error: true,
      message: "Error found AllUser"
    })
  } 
  finally {
    next();
  }
}, responseMiddleware) 

router.get('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    const result = userService.search({ id });
    if (!result) {
      res.status(404).send( {message: `Cannot find user with ${id}. User not found`} )
    } else {
      res.send(result)
    }
  }
  catch ({message}) {
    return (req.body = {
      error: true,
      message: "Error found user"
    })
  } 
  finally {
    next();
  }
}, responseMiddleware)

router.post('/', (req, res, next) => {
  try {
    const result = userService.createUser( req.body );
    if (!result) {
      res.status(404).send( {message: 'Cannot сreate new user'} )
    } else {
      res.status(200).send(result)
    }
  }
  catch ({message}) {
    return (req.body = {
      error: true,
      message: "Error сreate user"
    })
  } 
  finally {
    next();
  }
}, responseMiddleware)

router.put('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    const result = userService.updateUser( id, req.body );
    console.log(result);
    if (!result) {
      res.status(404).send( {message: `Cannot update user with this id: ${id}`} )
    } else {
      res.send(result)
    }
  }
  catch ({message}) {
    return (res.send = {
      error: true,
      message: "Error user not found"
    })
  } 
  finally {
    next();
  }
}, responseMiddleware)

router.delete('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    const result = userService.deleteUser( id );
    if (!result) {
      res.status(404).send( {message: `Cannot delete user with this id: ${id}`} )
    } else {
      res.send(result)
    }
  }
  catch ({message}) {
    return (req.body = {
      error: true,
      message: "Error delete user"
    })
  } 
  finally {
    next();
  }
}, responseMiddleware)


// router.get('/', (req, res, next) => {
//   res.send(userService.getAllUsers());
// }) 

// router.get('/:id', (req, res, next) => {
//   let id = req.params.id;
//   res.send(userService.search({ id }))
// })

// router.post('/', (req, res, next) => {
//   res.send(userService.createUser( req.body ))
// })

// router.put('/:id', (req, res, next) => {
//   let id = req.params.id;
//   res.send(userService.updateUser( id, req.body ))
// })

// router.delete('/:id', (req, res, next) => {
//   let id = req.params.id;
//   console.log({id})
//   res.send(userService.deleteUser( id ))
// })

// TODO: Implement route controllers for user

export { router };
