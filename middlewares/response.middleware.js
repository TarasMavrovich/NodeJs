const responseMiddleware = (req, res, next) => {
  try {
    const returns = req.body;
    if (!returns) {
      res.status(404).send( { message: 'No item returned' } )
    } else {
      res.status(200).json({...returns});
    }
  }
  catch ({message}) {
    res.status(500).json({
      error: true,
      message: "Error delete user"
    })
  } 
  finally {
    next();
  }
  // TODO: Implement middleware that returns result of the query
};

export { responseMiddleware };
