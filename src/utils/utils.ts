import _ from 'lodash';

export class UtilsFunc {
    static getInfoData ({ fields = [] as string[], object = {} }) {
        return _.pick(object, fields);
    }

    static updateObj (targetObj: any, newObj: any) {
        return _.extend(targetObj, newObj);
    }
}