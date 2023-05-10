function isStrongPassword(password) {
    // Check if password is at least 8 characters long
    if (password.length < 8) {
      return false;
    }
  
    // Check if password contains the string "password" (case-insensitive)
    if (password.toLowerCase().includes("password")) {
      return false;
    }
  
    // Check if password contains at least one uppercase character
    if (!/[A-Z]/.test(password)) {
      return false;
    }
  
    return true;
  }
  