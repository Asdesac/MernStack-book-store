import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishYear: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Book = mongoose.model("Book", bookSchema);
