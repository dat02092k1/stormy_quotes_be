import {Request, Response} from "express";
import {QuoteService} from "../services/quote.service";

class QuoteController {
    create = async (req: Request, res: Response) => {
        const data = {
            quote: req.body.quote,
            author: req.body.author,
        };

        const post = await QuoteService.addQuote(data);

        res.status(201).send(post);
    }
}

export const quoteController = new QuoteController();
