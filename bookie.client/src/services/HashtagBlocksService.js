import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class HashtagBlocksService
{
	async getAllBlocks() {
		const res = await api.get('api/hashtags')
		AppState.hashtagBlocks = res.data
		logger.log(res.data)
	}
	async createBlock(blockData) {
		const res = await api.post('api/hashtags', blockData)
		logger.log(res.data)
		AppState.hashtagBlocks = [res.data,...AppState.hashtagBlocks]
	}
}

export const hashtagBlocksService = new HashtagBlocksService();