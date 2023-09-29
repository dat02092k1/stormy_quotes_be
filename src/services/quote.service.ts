import Quote from "../models/quote.model";
import {db} from "../config/init.postgresql";
import {UtilsFunc} from "../utils/utils";

export class QuoteService {
    static async addQuote(data: any) {
        try {

            const newQuote = await db.quotes.create(data);

            if (!newQuote) throw new Error('Quote creation failed');
            console.log('newQuote::', newQuote);
            return newQuote;
        } catch (e) {
            console.log(e);
        }
    }

    static async editQuote(data: any) {
        try {
            const {id, quote} = data;

            let targetQuote = await db.quotes.findByPk(id);

            if (!targetQuote) throw new Error('Quote not found');

            targetQuote = UtilsFunc.updateObj(targetQuote, quote);
            targetQuote.save();
            return {
                metadata: targetQuote,
                message: 'updated'
            }
        } catch (e) {
            console.log(e);
        }
    }

    static async deleteQuote(id: number) {
        try {
            const quote = await db.quotes.findByPk(id);

            if (!quote) throw new Error('Quote not found');

            quote.destroy({
                where: {id: id}
            });

            return 'deleted';
        } catch (e) {
            console.log(e);
        }
    }

}