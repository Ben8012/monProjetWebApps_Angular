export class DateUtils {
    static format(date: Date) {
        let year = date.getFullYear();
        let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
        let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        let format = year + '-' + month + '-' +day;
        return format
    }
}