const admin = require("firebase-admin");
admin.initializeApp();

// Import the function fromt the specific file
const {addMessage} = require("./api/addMessage");

// Export the function for deployment
exports.addMessage = addMessage;
