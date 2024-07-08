export function pick_random<T>(items: T[]): T {
    return items[Math.floor(Math.random()*items.length)]
}

function optional_zero(x: number) {
    if (x < 10) {
        return "0"
    }
    return ""
}

export function create_timestamp(): string {
    const js_date = new Date()
    const year = js_date.getFullYear()
    const month = js_date.getMonth() + 1
    const date = js_date.getDate()

    const hours = js_date.getHours()
    const minutes = js_date.getMinutes()
    const seconds = js_date.getSeconds()

    const year_string = `${optional_zero(year)}${year}`
    const month_string = `${optional_zero(month)}${month}`
    const date_string = `${optional_zero(date)}${date}`
    const hours_string = `${optional_zero(hours)}${hours}`
    const minutes_string = `${optional_zero(minutes)}${minutes}`
    const seconds_string = `${optional_zero(seconds)}${seconds}`

    return `${year_string}-${month_string}-${date_string} ${hours_string}:${minutes_string}:${seconds_string}`
}