const checkAdminMiddleware = (req, res, next) => {
  if (req.user && req.user.rol === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Acceso denegado: No eres administrador" });
  }
};

module.exports = checkAdminMiddleware;
