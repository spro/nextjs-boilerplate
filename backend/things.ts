import {randomSample} from '../lib/helpers'
import {Thing} from '../store/types'
import log from '../lib/log'

const ERROR_RATE = 0.2

let things: Thing[] = [
    {word: "quisling", pronounciation: "KWIZ-ling", definition: "one who commits treason"},
    {word: "gadabout", pronounciation: "GAD-uh-bout", definition: "a person who goes from place to place in social activity"},
    {word: "nostrum", pronounciation: "NAHSS-trum", definition: "a usually questionable remedy or scheme"},
    {word: "jeopardy", pronounciation: "JEP-er-dee", definition: "exposure to or imminence of death, loss, or injury"},
    {word: "obeisance", pronounciation: "oh-BEE-sunss", definition: "acknowledgment of another's superiority or importance"},
    {word: "optimization", pronounciation: "ahp-tuh-muh-ZAY-shun", definition: "optimizationplay"},
    {word: "insouciance", pronounciation: "in-SOO-see-unss", definition: "lighthearted unconcern"},
    {word: "gulosity", pronounciation: "goo-LAH-suh-tee", definition: "excessive appetite"},
    {word: "modicum", pronounciation: "MAH-dih-kum", definition: "a small portion"},
    {word: "rapport", pronounciation: "ra-POR", definition: "a friendly, harmonious relationship"},
    {word: "mimesis", pronounciation: "muh-MEE-sis", definition: "imitation, mimicry"},
]

export async function getThings(n=5) {
    if (Math.random() < ERROR_RATE)
        throw new Error("Some life-threatening error has occured")
    return {
        success: true,
        things: randomSample(things, n)
    }
}

export async function addThing(thing: Thing) {
    things.push(thing)
    return {
        success: true,
        thing
    }
}
