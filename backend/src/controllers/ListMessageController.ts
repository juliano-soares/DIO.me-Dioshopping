import { Request, Response } from "express";
import { ListMessageService } from "../services/ListMessagesService";

class ListMessageController {
    async hanle(request: Request, response: Response){
        const listMessageService = new ListMessageService();

        const allMessages = await listMessageService.execute();

        if(allMessages) {
            return response.json(allMessages)
        }

        return response.json({});
    }
}

export { ListMessageController }