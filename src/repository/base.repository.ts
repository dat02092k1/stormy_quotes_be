import {DestroyOptions, Model, ModelCtor, WhereOptions} from "sequelize";
import {UtilsFunc} from "../utils/utils";

export class BaseRepository<T extends Model> {
    private model: ModelCtor<T>;

    constructor(model: ModelCtor<T>) {
        this.model = model;
    }

    async findOne(options: any): Promise<T | null> {
        try {
            const result = await this.model.findOne({ where: options });

            return result || null;
        } catch (e) {
            throw e;
        }
    }

     async findWithCondition(options?: any): Promise<T[]> {
        try {
            const result = await this.model.findAll({where: (options?.condition?? '')});
            return result;
        } catch (e) {
            throw e;
        }
    }

    async create(data: any): Promise<T> {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (e) {
            throw e;
        }
    }

    async update(data: any, options: any): Promise<T | null> {
        try {
            let doc = await this.model.findOne({where: options});
            // console.log('doc::', doc)
            doc = UtilsFunc.updateObj(doc, data);
            await doc?.save();
            return doc || null;
        }
        catch (e) {
            throw e;
        }
    }

    async delete(options: any): Promise<void> {
        try {
            const doc = await this.model.destroy({where: options?.condition});
            console.log('deleted', doc);
        } catch (e) {
            console.log(e);
        }
    }
}