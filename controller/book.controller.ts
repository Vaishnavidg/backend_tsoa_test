import { Request, Response } from "express";
import { IBook, FormData } from "../interfaces/Book";

import { Book } from "../models/book.model";

//Get All Book Details
async function GetAllBookDetails(req: Request, res: Response): Promise<void> {
    try {
        const book = await Book.find({});
        res.status(201).json(book);

    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

//Get Book details by ID
async function GetBookDetailsByID(req: Request, res: Response): Promise<void> {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            res.status(404).json({ msg: "Book not found" })
            return
        }
        // res.json(book);
        res.status(201).json(book);

    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

//Add Book Detail
async function AddBookDetails(req: Request, res: Response): Promise<void> {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            res.status(400).json({
                message: "All required fields are not filled"
            });
            return;
        }

        const newBook: FormData = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        const book = await Book.create(newBook);
        res.status(201).json({ msg: "added successfully", book: book });

    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

//Update Book Detail
async function UpdateBookDetail(req: Request, res: Response): Promise<void> {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            res.status(400).json({
                message: "All required fields are not filled"
            });
            return
        }

        const newBook: IBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        const book = await Book.findByIdAndUpdate(req.params.id, newBook);
        res.status(201).json({ msg: "Updated successfully" });

    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
}

//Delete Book details by ID
async function DeleteBookByID(req: Request, res: Response): Promise<void> {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            res.status(404).json({ msg: "Book not found" })
            return
        }
        // res.json(book);
        res.status(201).json({ msg: "Book Deleted Successfully", book: book });

    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export { AddBookDetails, GetAllBookDetails, GetBookDetailsByID, UpdateBookDetail, DeleteBookByID };
