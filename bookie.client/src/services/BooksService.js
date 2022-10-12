import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class BooksService
{
	async getAllBooks() {
		const res = await api.get('api/books');
		logger.log(res.data);
		AppState.myBooks = res.data;
	}
	async edit(book) {
		const res = await api.put('api/books/' + book.id, book)
		logger.log(res)
	}

	async addBook(book) {
		const res = await api.post('api/books', book)
		AppState.myBooks = [res.data, ...AppState.myBooks] 
	}
}

export const booksService = new BooksService();