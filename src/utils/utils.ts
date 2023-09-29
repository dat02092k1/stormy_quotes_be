import _, {parseInt} from 'lodash';

export class UtilsFunc {
    static getInfoData ({ fields = [] as string[], object = {} }) {
        return _.pick(object, fields);
    }

    static updateObj (targetObj: any, newObj: any) {

        return _.extend(targetObj, newObj);
    }

    static getQueryParams (options: any) {
        if (!options.condition) {
            options.condition = {};
        }
        if (options.id || options.quoteId || options.category_id) {
            options.condition['id'] = parseInt(options.id) || parseInt(options.quoteId) || parseInt(options.category_id);
        }

        return {
            page: options.page || 1,
            limit: options.limit || 20,
            condition: options.condition
        };
    }
}