export async function delay(n: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, n)
    })
}

export function randomChoice(items: any[]) {
    return items[Math.floor(Math.random() * items.length)]
}

export function randomSample(items: any[], n: number) {
    if ((items.length == 0) || (n <= 0)) {
        return []
    }

    let sample = []

    while (sample.length < Math.min(n, items.length)) {
        const item = randomChoice(items)
        if (sample.indexOf(item) == -1) {
            sample.push(item)
        }
    }
    return sample
}

export function errorToJson(error: Error) {
    return {
        message: error.message,
        stack: error.stack
    }
}
