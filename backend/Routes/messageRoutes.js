const express = require("express");
const { sendMessage, allMessages } = require("../Controllers/messageController");
const { protect } = require("../middleWare/authMiddleWare");
// const {
//   allMessages,
//   sendMessage,
// } = require("../controllers/messageControllers");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;