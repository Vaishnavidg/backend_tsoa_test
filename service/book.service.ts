import { errorMessages, responseCodes, responseMessages } from "../enums/books";
import { IBook, FormData, UpdateDeleteResponse } from "../interfaces/Book";
import { Book } from "../models/book.model";

export class BookService {

    /**
        * get all books 
        * @return Array of {IBook}
        */
    public static async getAllBooks(): Promise<IBook[]> {
        try {
            return await Book.find({});
        } catch (error: any) {
            console.log(error.message);
            throw new Error("Internal server error");
        }
    }
    /**
         * add book
         * @param {FormData} bookData
         * @return {IBook}
         */
    public static async addBookDetails(bookData: FormData): Promise<IBook> {
        try {
            return await Book.create(bookData);
        } catch (error: any) {
            console.log(error.message);
            throw new Error("Internal server error");
        }
    }
    /**
        * get book by id
        * @param {string} id
        * @return {IBook}
        */
    public static async getBookById(id: string): Promise<IBook | null> {
        try {
            return await Book.findById(id);
        } catch (error: any) {
            console.log(error.message);
            throw new Error("Internal server error");
        }
    }
    /**
         * update book
         * @param {FormData} bookData
         * @return {data}
         */
    public static async updateBookDetail(id: string, bookData: FormData): Promise<UpdateDeleteResponse> {
        const data: {
            response: any;
            status: any;
        } = {
            response: null,
            status: null,
        };
        try {
            const book = await Book.findByIdAndUpdate(id, bookData);
            if (book) {
                data.response = responseMessages.BRAND_MODIFIED;
                data.status = responseCodes.OK;
            }
        } catch (error: any) {
            console.log(error.message);
            data.response = error.message;
            data.status = responseCodes.ERROR;
        }
        return data;
    }


    /**
     * delete book
     * @param {string} id
     * @return {data}
     */
    public static async deleteBookByID(id: string): Promise<UpdateDeleteResponse> {
        const data: {
            response: any;
            status: any;
        } = {
            response: null,
            status: null,
        };
        try {
            const book = await Book.findByIdAndDelete(id);
            if (book) {
                data.response = errorMessages.DELETE_SUCCESS;
                data.status = responseCodes.OK;
            } else {
                data.response = errorMessages.DELETE_FAILURE;
                data.status = responseCodes.BAD_REQUEST;
            }
        }
        catch (error: any) {
            console.log(error.message);
            data.response = error.message;
            data.status = responseCodes.ERROR;
        }
        return data;
    }


}