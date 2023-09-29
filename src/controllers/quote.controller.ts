import {Request, Response} from "express";
import {QuoteService} from "../services/quote.service";
import {parseInt} from "lodash";
import {UtilsFunc} from "../utils/utils";

class QuoteController {
    create = async (req: Request, res: Response) => {
        const data = {
            quote: req.body.quote,
            author: req.body.author,
            category_id: req.body.category_id
        };

        const quote = await QuoteService.addQuote(data);

        res.status(201).send(quote);
    }

    edit = async (req: Request, res: Response) => {
        const data = {
            quote: req.body.quote.quote,
            author: req.body.quote.author,
            category_id: req.body.quote.category_id
        };

        const options = UtilsFunc.getQueryParams(req.params);

        const quote = await QuoteService.editQuote(data, options);

        res.status(200).send(quote);
    }

    delete = async (req: Request, res: Response) => {
        const id = req.params.id;

        const quote = await QuoteService.deleteQuote(parseInt(id));

        res.status(200).send(quote);
    }

    findQuotesByCategory = async (req: Request, res: Response) => {
        const categoryId = req.query.categoryId;

        if (typeof categoryId === "string") {
            const quotes = await QuoteService.findQuotesByCategory(categoryId);
            return res.status(200).send(quotes);
        }

        return res.status(200).send(null);
    }
}

export const quoteController = new QuoteController();
