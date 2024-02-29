import { GetAllBookDetails, AddBookDetails, GetBookDetailsByID,DeleteBookByID,UpdateBookDetail } from "../controller/book.controller";

const express = require("express");

const router = express.Router();


//Routes RestApi
router.route("/")
    .get(GetAllBookDetails)
    .post(AddBookDetails);

router.route("/:id")
    .get(GetBookDetailsByID)
    .put(UpdateBookDetail)
    .delete(DeleteBookByID);

module.exports = router;