import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router();

// Route for saving a new book
router.post("/", async (request, response) => {
  try {
    console.log(request.body);
    const { title, author, publishYear } = request.body;

    if (!title || !author || !publishYear) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const newBook = { title, author, publishYear };
    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (error) {
    console.error("Error creating book:", error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Route for getting all books
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({ data: books });
  } catch (error) {
    console.error("Error fetching books:", error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Route for getting one book by ID
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);

    if (!book) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).json(book);
  } catch (error) {
    console.error("Error fetching book:", error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Route for updating a book
router.put("/:id", async (request, response) => {
  try {
    const { title, author, publishYear } = request.body;

    if (!title || !author || !publishYear) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const { id } = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body, {
      new: true,
    });

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response
      .status(200)
      .send({ message: "Book updated successfully", book: result });
  } catch (error) {
    console.error("Error updating book:", error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Route for deleting a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error.message);
    return response.status(500).send({ message: error.message });
  }
});

export default router;
