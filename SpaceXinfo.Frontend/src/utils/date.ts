
export const dateToString = (date: Date) => {
    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
};

export const dateToCalendar = (date: string, text: string) => {
    date = date.replaceAll("-", "").replaceAll(".", "").replaceAll(":","");
    return `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${
        date
        }/${
        date
        }&text=${text.split(" ").join("+")}`
};