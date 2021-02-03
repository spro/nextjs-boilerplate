import * as colors from 'tailwindcss/colors'

const color = (color: string, amount: number): string => colors[color][amount.toString()]

export default {
    log: (tag: string, o: any) => { console.log(`%c[${tag}]`, `color: ${color('gray', 400)}`, o) },
    info: (tag: string, o: any) => { console.log(`%c[${tag}]`, `color: ${color('blue', 400)}`, o) },
    error: (tag: string, o: any) => { console.log(`%c[${tag}]`, `color: ${color('red', 400)}`, o) },
    warning: (tag: string, o: any) => { console.log(`%c[${tag}]`, `color: ${color('yellow', 400)}`, o) }
}

