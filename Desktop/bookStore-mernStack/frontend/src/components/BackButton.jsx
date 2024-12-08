import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import PropTypes from "prop-types";

const BackButton = ({ destination = "/" }) => {
  // Validate the destination prop
  if (typeof destination !== "string" || destination.trim() === "") {
    console.error(
      'Invalid destination prop provided to BackButton. Defaulting to "/"'
    );
    destination = "/";
  }

  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

// PropTypes for type checking
BackButton.propTypes = {
  destination: PropTypes.string,
};

export default BackButton;
