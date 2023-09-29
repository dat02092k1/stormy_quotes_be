import _ from 'lodash';

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
        if (options.userId) {
            options.condition['user'] = options.userId;
        }
        if (typeof options.condition === 'object') {
            if (options.condition.createdFrom && options.condition.createdTo) {
                var startDate = new Date(options.condition.createdFrom);
                var endDate = new Date(options.condition.createdTo);
                endDate.setDate(endDate.getDate() + 1);
                endDate = new Date(endDate);
                var createdCondition = {
                    $gte: startDate,
                    $lt: endDate
                };
                options.condition.created = createdCondition;
            }
            delete options.condition.createdFrom;
            delete options.condition.createdTo;
        }

        return {
            page: options.page || 1,
            limit: options.limit || 20,
            condition: options.condition
        };
    }
}