export class Utils {
    static random(from, to) {
        return Math.floor(Math.random() * (to - from)) + from;
    }
    static dateString() {
        const date = new Date;
        const currentDateString = date.toLocaleDateString("he-IL", {
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            fractionalSecondDigits: 3,
        });
        return currentDateString;
    }
    static stringCurrentTime() {
        const date = new Date();
        const stringCurrentTime = date.toLocaleDateString("he-IL", {
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        });
        return stringCurrentTime;
    }
    static bubbleSort(arr) {
        //אנחנו רוצים למיין את המערך
        //אלגוריתם למיון מערך
        for (let j = 0; j < arr.length; j++) {
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    //swap:
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                }
            }
        }
    }
}
