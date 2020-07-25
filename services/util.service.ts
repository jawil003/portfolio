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

    public resolveLocation = (currentUrl: string = location.host, newSuburl: string): string => {
        const result = currentUrl.split("/");
        if (process.env.NODE_ENV === "development")
            if (result[1] === "de" || result[1] === "en") {
                return `${result[0]}/${result[1]}/${newSuburl}`;
            } else {
                return `${newSuburl}`;
            }
        else
            if (result[2] === "de" || result[1] === "en") {
                return `${result[0]}/${result[1]}/${result[2]}/${newSuburl}`;
            } else {
                return `${result[1]}/${newSuburl}`;
            }
    }
}