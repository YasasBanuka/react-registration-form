
import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";
import {Footer} from "./Footer";

// PasswordErrorMessage component renders the password error message
const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  // State variables for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  // Handles email input changes and updates validation state
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const validationResult = validateEmail(e.target.value);
    setEmailErrorMessage(validationResult.errorMessage || ""); // Set empty string if no error
  };

  // Checks if all form fields are valid for submission
  const getIsFormValid = () => {
    const { valid } = validateEmail(email); // Destructure validation result
    return (
      firstName !== "" &&
      valid && // Use 'valid' from validateEmail
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  // Clears all form fields and state variables
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
    setEmailErrorMessage(""); // Reset email error message
  };

  // Handles form submission (replace with your actual submission logic)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
    clearForm();
  };

  return (
    
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>

          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="Field">
            <label>Last name</label>
            <input
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
            />
            {emailErrorMessage && (
              <p className="FieldError"> {emailErrorMessage} </p>
            )} {/* Conditionally render error */}
          </div>

          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              placeholder="Password"
              type="password"
              value={password.value}
              onChange={(e) => setPassword({ ...password, value: e.target.value })}
              onBlur={(e) => setPassword({ ...password, isTouched: true })}
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>

          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>

          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
      <Footer />
    </div>
    
  );
}

export default App;
