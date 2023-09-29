import {DestroyOptions, Model, ModelCtor, WhereOptions} from "sequelize";
import {UtilsFunc} from "../utils/utils";

export class BaseRepository<T extends Model> {
    private model: ModelCtor<T>;

    constructor(model: ModelCtor<T>) {
        this.model = model;
    }

    async findOne(options: WhereOptions): Promise<T | null> {
        try {
            const result = await this.model.findOne({where: options});
            return result || null;
        }
        catch (e) {
            throw e;
        }
    }

    async findAll(options?: WhereOptions): Promise<T[]> {
        try {
            const result = await this.model.findAll({where: options});
            return result;
        }
        catch (e) {
            throw e;
        }
    }

    async create(data: any): Promise<T> {
        try {
            const result = await this.model.create(data);
            return result;
        }
        catch (e) {
            throw e;
        }
    }
    
    async update(data: any, options: WhereOptions): Promise<T> {
        try {
            const doc = await this.model.findOne({where: options});
            if (!doc) throw new Error('Document not found');

            UtilsFunc.updateObj(doc, data);
            return doc;
        }
        catch (e) {
            throw e;
        }
    }

    async delete(options: DestroyOptions): Promise<void> {
        try {
            const doc = await this.model.destroy(options);
        }
        catch (e) {
            console.log(e);
        }
    }
}