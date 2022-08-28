
export const dateToString = (date: Date) => {
    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
};

export const dateToCalendar = (date: string, text: string) => {
    return `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${
        date.replaceAll("-", "").replaceAll(".", "").replaceAll(":","")
        }/${
        date.replaceAll("-", "").replaceAll(".", "").replaceAll(":","")
        }&text=${text.split(" ").join("+")}`
};