const {
  getAllObjectsByClass,
  getAllSkips,
  getObjectByDesignation,
  addSkip,
  getScpById
} = require('../services/skips.service');

const {
  designationValidator,
  validateClass,
  validateScpBody
} = require('../util/validators/index');

exports.getAllObjects = (req, res, next) => {
  getAllSkips()
    .then(skips => {
      res.status(200).json(skips);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.getObjectsByClass = (req, res, next) => {
  const objectClass = req.params.objectClass;
  if (validateClass(objectClass)) {
    getAllObjectsByClass(objectClass)
      .then(objects => {
        res.status(200).json(objects);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  } else {
    res.status(404).json('No Object class was found by that name.');
  }
};

exports.findObjectsByDesignation = (req, res, next) => {
  const { designation } = req.body;
  if (designationValidator(designation)) {
    getObjectByDesignation(designation)
      .then(objects => {
        res.status(200).json(objects);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  } else {
    res.status(400).json('Invalid designation!');
  }
};

exports.addNewSkip = (req, res, next) => {
  const skip = req.body;
  if (!validateScpBody(skip)) {
    res.status(400).json('Invalid SCP entry.');
  } else {
    addSkip(skip)
      .then(() => {
        res.status(201).json('Added new SCP.');
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
};

exports.findSkipById = (req, res, next) => {
  const id = req.params.id;
  getScpById(id)
    .then(skip => res.status(200).json(skip))
    .catch(err => res.status(500).json(err));
};
