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
}

export const booksService = new BooksService();