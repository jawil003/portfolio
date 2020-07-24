export default class UtilService {
    public getDifferenceFromEnd = (a: string, b: string): number => {

        return this.removeDuplicate(a, b).length;
    }
    public removeDuplicate = (a: string, b: string) => {
        const aArray = a.split(" ");
        const bArray = b.split(" ");
        let result = []
        for (let i = 0; i < aArray.length; i++) {
            if (aArray[i] !== bArray[i]) {
                result.push(...aArray.slice(i, aArray.length));
                break;
            }
        }
        return result.join(" ");
    }
}