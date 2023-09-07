const Book = require("../models/bookModel");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.send(books);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

const getBookbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({ _id: id });
    res.send(book);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

const addBook = async (req, res) => {
  try {
    const { author, description, image, name } = req.body;
    if (author && description && image && name) {
      const newBook = await Book.create({
        name,
        author,
        description,
        image,
      });
      res.status(200).send(newBook);
    } else {
      res.status(400).send("All fields required");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.deleteOne({ _id: id });
    res.send({ message: "Deleted", book });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { author, description, image, name } = req.body;
    if (author && description && image && name) {
      const filter = { _id: id };
      const update = { author, description, image, name };

      const updatedBook = await Book.findOneAndUpdate(filter, update, {
        new: true,
      });
      res.send(updatedBook);
    } else {
      res.status(400).send("All fields required");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

module.exports = { addBook, getAllBooks, getBookbyId, deleteBook, updateBook };
