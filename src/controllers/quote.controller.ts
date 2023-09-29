import {Request, Response} from "express";
import {QuoteService} from "../services/quote.service";

class QuoteController {
    create = async (req: Request, res: Response) => {
        const data = {
            quote: req.body.quote,
            author: req.body.author,
        };

        const quote = await QuoteService.addQuote(data);

        res.status(201).send(quote);
    }

    edit = async (req: Request, res: Response) => {
        const data = {
            quote: req.body.quote,
            id: req.params.id
        }

        const quote = await QuoteService.editQuote(data);

        res.status(200).send(quote);
    }

    delete = async (req: Request, res: Response) => {
        const id = req.params.id;

        const quote = await QuoteService.deleteQuote(parseInt(id));

        res.status(200).send(quote);
    }
}

export const quoteController = new QuoteController();
