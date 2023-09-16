import "react-quill/dist/quill.snow.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown-tree-select/dist/styles.css";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./Components/RegistrationForm";
import EmployeeList from "./Components/EmployeeList";
import SearchEmployee from "./Components/SearchEmployee";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/employeelist" element={<EmployeeList />} />
        <Route path="/searchemployee" element={<SearchEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
