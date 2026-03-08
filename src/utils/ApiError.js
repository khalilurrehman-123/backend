class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);

    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.message = message;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };

/*

point(1):stack means the stack trace, which shows where the error happened in your code and the path the program took to reach that error.


What it tells you

Error message → User not found

File name → userController.js

Line number → 25

Function call chain → which functions led to the error

In your code
Error.captureStackTrace(this, this.constructor);
*/
