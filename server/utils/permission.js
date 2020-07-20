const validateAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    const adminError = new Error('Not Authorized!');
    adminError.status = 403;

    res.send(adminError);
  } else {
    next();
  }
};

const validateUser = (req, res, next) => {
  if (!req.user) {
    const userError = new Error('Not Authorized!');
    userError.status = 403;

    res.send(userError);
  } else {
    next();
  }
};

const validateUserOrAdmin = (req, res, next) => {
  if (!req.user.isAdmin || Number(req.user.id) === Number(req.params.id)) {
    const userOrAdminError = new Error('Not Authorized!');
    userOrAdminError.status = 403;

    res.send(userOrAdminError);
  } else {
    next();
  }
};

module.exports = {
  validateAdmin,
  validateUser,
  validateUserOrAdmin
};
