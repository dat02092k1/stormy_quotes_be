import Quote from "../models/quote.model";
import {db} from "../config/init.postgresql";

export class QuoteService {
    static async addQuote(data: any) {
        try {
            console.log(data)
            const newQuote = await db.quotes.create(data);

            if (!newQuote) throw new Error('Quote creation failed');
            console.log('newQuote::', newQuote);
            return newQuote;
        } catch (e) {
            console.log(e);
        }
    }
}