export const validateEmail = (email) => {
    // Regular expression for validating email format
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    // Check if email matches the regex pattern (case-insensitive)
    const isValid = emailRegex.test(email.toLowerCase());
  
    if (isValid) {
      // Return object with valid property set to true
      return { valid: true };
    } else {
      // Return object with valid property set to false and an error message
      return { valid: false, errorMessage: "Please enter a valid email address." };
    }
  };
  