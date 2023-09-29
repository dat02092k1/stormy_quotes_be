import {db} from "../config/init.postgresql";
import {UtilsFunc} from "../utils/utils";
import {BaseRepository} from "../repository/base.repository";

const quoteRepository = new BaseRepository(db.quotes);
export class QuoteService {
    static async addQuote(data: any) {
        try {

            const newQuote = await quoteRepository.create(data);

            if (!newQuote) throw new Error('Quote creation failed');
            console.log('newQuote::', newQuote);
            return newQuote;
        } catch (e) {
            console.log(e);
        }
    }

    static async editQuote(data: any, options: any) {
        try {
            console.log('options::', options.condition);
            let targetQuote = await quoteRepository.findOne(options.condition);

            if (!targetQuote) throw new Error('Quote not found');

            await quoteRepository.update(data, options.condition);

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

    static async findQuotesByCategory(categoryId: string) {
        try {
            const quotes = db.quotes.findAndCountAll({
                where: {
                    category_id: parseInt(categoryId)
                }
            });

            if (!quotes) throw new Error('Quotes not found');

            return quotes;
        }
        catch (e) {
            console.log(e);
        }
    }
}