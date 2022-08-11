export const getClasses = 
(mainClass: string, variants: string[]): string => {
    const classes = [mainClass, ...variants].join(" ");
    return classes;
}

export const addBodyClass = (className: string) => document.body.classList.add(className);

export const removeBodyClass = (className: string) => document.body.classList.remove(className);