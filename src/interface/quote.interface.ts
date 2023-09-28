import {Model} from "sequelize";

export interface IQuote {
    quote: string;
    author: string;
}

export interface QuoteModel extends Model<IQuote>, IQuote {};
