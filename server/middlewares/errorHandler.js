const errorHandler = (error, req, res, next) => {
  console.log(error);
  let code = 500;
  let message = "INTERNAL SERVER ERROR";

  if (error.name === "LoginError") {
    code = 401;
    message = "Email and password are required";
  }

  if (error.name === "WrongEmailPassword") {
    code = 401;
    message = "Invalid email/password";
  }

  if (error.name === "SequelizeDatabaseError") {
    code = 400;
    message = "Invalid input";
  }
  if (error.name === "JsonWebTokenError") {
    code = 401;
    message = "Invalid token";
  }
  if (error.name === "Invalid email/password") {
    code = 401;
    message = "Invalid email/password";
  }
  if (error.name == "Unauthorized") {
    code = 401;
    message = "Invalid token";
  }
  if (error.name === "EmailFormat") {
    code = 401;
    message = "Invalid email format";
  }

  if (error.name === "EmptyEmail") {
    code = 401;
    message = "Email is required";
  }

  if (error.name === "EmptyPassword") {
    code = 401;
    message = "Password is required";
  }

  res.status(code).json({ message });
};

module.exports = errorHandler;
