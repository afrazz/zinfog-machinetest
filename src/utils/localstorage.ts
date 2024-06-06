export const saveToLocalStorage = (key:string, value: string) => {
   window.localStorage.setItem(key, JSON.stringify(value))
}

export const getItemFromLocalStorage = (key:string) => {
    return window.localStorage.getItem(key)
}

export const removeItemFromLocalStorage = (key:string) => {
    window.localStorage.removeItem(key)
}
