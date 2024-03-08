// import { Request, Response } from "express";
import { IBook, FormData, UpdateDeleteResponse } from "../interfaces/Book";

import { Book } from "../models/book.model";
import { Body, Controller, Delete, Get, Path, Post, Put, Route, SuccessResponse, Response, Tags } from "tsoa";
import { BookService } from "../service/book.service";
import { errorMessages, responseCodes, responseMessages } from "../enums/books";
import { controller } from "inversify-express-utils";
import { inject } from "inversify";

@Route("/")
@controller("/")
@Tags('books')
export class BookController extends Controller {
    //defines the type of bookservice
    // contructor is used to initialise the properties of object
    private bookservice: BookService;
  /**
  *
  * @param {BookService} bookservice
  */
//   @inject(BookService)
//   private bookservice: BookService;
    constructor(
        @inject(BookService) bookservice,
    ) {
        super();
        this.bookservice = bookservice;
        console.log(bookservice);
    }

    /**
     * Returns a list of the books with all details present in the DB
     * @return {Array<Books>}
     */
    @SuccessResponse("200", "OK")
    @Get("/")
    @Response(responseCodes.OK, responseMessages.OK)
    @Response(responseCodes.BAD_REQUEST, responseMessages.BAD_REQUEST)
    @Response(responseCodes.ERROR, responseMessages.ERROR)
    async GetAllBookDetails(): Promise<IBook[]> {
        return await this.bookservice.getAllBooks();

    }

    /**
     * Creates and enters into DB a new brand
     * @param {FormData} requestData containing all
     * details of the books to be entered
     * @return {IBook} all details for book after successfull entry in DB
     */
    @SuccessResponse("201", "Created")
    @Post("/")
    @Response(responseCodes.CREATED, responseMessages.CREATED)
    @Response(responseCodes.BAD_REQUEST, responseMessages.BAD_REQUEST)
    @Response(responseCodes.ERROR, responseMessages.ERROR)
    async AddBookDetails(@Body() requestData: FormData): Promise<IBook> {
        return await this.bookservice.addBookDetails(requestData);
    }

    /**
     * Returns a brand based on the entered/selected ID
     * @param {string} id The id of the brand for which details are required
     * @return {IBook} an object with all details of the brand
     */
    @SuccessResponse("200", "OK")
    @Get("/{id}")
    @Response(responseCodes.OK, responseMessages.OK)
    @Response(responseCodes.NOT_FOUND, errorMessages.BRAND_NOT_FOUND)
    @Response(responseCodes.BAD_REQUEST, responseMessages.BAD_REQUEST)
    @Response(responseCodes.ERROR, responseMessages.ERROR)
    async GetBookDetailsByID(@Path() id: string): Promise<IBook | null> {
        return await this.bookservice.getBookById(id);
    }


    /**
     * Updates details for an existing brand in the DB
     * @param {FormData} requestData object containing all
     * details of the brand to be updated
     * @return {UpdateDeleteResponse} Confirmation of successful update
     */
    @Put("/{id}")
    @SuccessResponse("200", "OK")
    @Response(responseCodes.OK, responseMessages.OK)
    @Response(responseCodes.BAD_REQUEST, responseMessages.BAD_REQUEST)
    @Response(responseCodes.ERROR, responseMessages.ERROR)
    async UpdateBookDetail(@Path() id: string, @Body() requestData: FormData): Promise<UpdateDeleteResponse> {
        return await this.bookservice.updateBookDetail(id, requestData);
    }


    /**
     * Deletes a brand from the DB
     * @param {string} id The id of the brand to be deleted
     * @return {UpdateDeleteResponse} Confirmation of successful deletion
     */
    @SuccessResponse("204", "Book Deleted Successfully")
    @Delete("/{id}")
    @Response(responseCodes.OK, responseMessages.OK)
    @Response(responseCodes.NOT_FOUND, errorMessages.BRAND_NOT_FOUND)
    @Response(responseCodes.BAD_REQUEST, responseMessages.BAD_REQUEST)
    @Response(responseCodes.ERROR, responseMessages.ERROR)
    async DeleteBookDetail(@Path() id: string): Promise<UpdateDeleteResponse> {
        return await this.bookservice.deleteBookByID(id)
    }
}