export async function delay(n: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, n)
    })
}
