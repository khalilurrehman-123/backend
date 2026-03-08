import multer from "multer";

//This code configures Multer to upload files and store them on the server.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
});

/*
multer.diskStorage() defines where and how uploaded files will be saved.

destination sets the folder (./public/temp) where the uploaded files will be stored.

filename creates a unique file name using the field name, current time, and a random number to avoid duplicate names.

const upload = multer({ storage }) creates the multer middleware that you use in routes to handle file uploads. 📁🚀

noted down:
Think of cb (callback) as a function you call to give the result back to multer.

When Multer uploads a file, it asks two questions:

1️⃣ Where should I save the file?
2️⃣ What should be the file name?

*/
