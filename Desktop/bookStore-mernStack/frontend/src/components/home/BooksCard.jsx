/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookSingleCard from "./BookSingleCard";
import PropTypes from "prop-types";

const BooksCard = ({ books }) => {
  if (!books || books.length === 0) {
    return <p>No books available.</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

BooksCard.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publishYear: PropTypes.string.isRequired,
      // Add other properties as needed
    })
  ).isRequired,
};

export default BooksCard;
