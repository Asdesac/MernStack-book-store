import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import BackButton from "./components/BackButton";
import ShowBooks from "./pages/ShowBooks";
import EditBooks from "./pages/EditBooks";
import DeleteBooks from "./pages/DeleteBooks";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<BackButton destination="/some-path" />} />{" "}
      {/* This route is redundant */}
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBooks />} />
      <Route path="/books/edit/:id" element={<EditBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBooks />} />
    </Routes>
  );
};

export default App;
