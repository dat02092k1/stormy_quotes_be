import {Sequelize, DataTypes, ModelAttributes} from 'sequelize';
import {IQuote, QuoteModel} from "../interface/quote.interface";

const quoteAttributes: ModelAttributes<QuoteModel, IQuote> = {
    quote: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        defaultValue: 'Anonymous',
    }
};

export default (sequelize: Sequelize, DataTypes: any) => {
    const Quote = sequelize.define<QuoteModel, IQuote>('Quote', quoteAttributes, {
        timestamps: true,
    });

    return Quote;
};
