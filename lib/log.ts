import * as colors from 'tailwindcss/colors'

const color = (color: string, amount: number): string => colors[color][amount.toString()]

export default {
    log: (tag: string, ...args: any[]) => { console.log(`%c[${tag}]`, `color: ${color('gray', 400)}`, ...args) },
    info: (tag: string, ...args: any[]) => { console.log(`%c[${tag}]`, `color: ${color('blue', 400)}`, ...args) },
    error: (tag: string, ...args: any[]) => { console.log(`%c[${tag}]`, `color: ${color('red', 400)}`, ...args) },
    warning: (tag: string, ...args: any[]) => { console.log(`%c[${tag}]`, `color: ${color('yellow', 400)}`, ...args) }
}

