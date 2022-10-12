import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class HashtagBlocksService
{
	async getAllBlocks() {
		const res = await api.get('api/hashtags')
		AppState.hashtagBlocks = res.data
	}
	async createBlock(blockData) {
		const res = await api.post('api/hashtags', blockData)
		AppState.hashtagBlocks = [res.data,...AppState.hashtagBlocks]
	}
	async deleteBlock(id) {
		const res = await api.delete('api/hashtags/' + id)
		logger.log(res.data)
		AppState.hashtagBlocks = AppState.hashtagBlocks.filter(b => b.id != id)
	}
}

export const hashtagBlocksService = new HashtagBlocksService();