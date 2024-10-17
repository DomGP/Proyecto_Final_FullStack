const express = require("express");
const postsController = require("../controllers/postsController");
const authMiddleware = require("../Middleware/authMiddleware");

const router = express.Router();

router.post("/createpost", authMiddleware, postsController.createPost);

router.get("/getpost", authMiddleware, postsController.getPostsByUser);

router.delete(
  "/delete/:post_id",
  authMiddleware,
  postsController.deletePostById
);
module.exports = router;
