const express = require("express");
const router = express.Router();

const bookStore = require("../controllers/bookStoreController");

router.get("/", bookStore.getBooks);
router.get("/:id", bookStore.getBookById);
router.post("/", bookStore.addBook);
router.put("/:id", bookStore.updateBookById);
router.delete("/:id", bookStore.deleteBookById);

module.exports = router;