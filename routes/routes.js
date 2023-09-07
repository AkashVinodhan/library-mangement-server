const {
  addBook,
  getAllBooks,
  getBookbyId,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");

const router = require("express").Router();

router.get("/books", getAllBooks);
router.get("/books/:id", getBookbyId);
router.post("/books", addBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
