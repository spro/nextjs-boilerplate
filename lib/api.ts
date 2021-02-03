import {delay} from './helpers'
import log from './log'
import * as backend from '../backend'
import {Thing} from '../store/types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api'
const FAKE_DELAY = 2000

async function apiFetch(method: string, path: string, body=null) {
    if (FAKE_DELAY) await delay(FAKE_DELAY)

    const res = await fetch(API_BASE_URL + path, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: body && JSON.stringify(body)
    })

    try {
        const res_body = await res.json()
        return res_body
    } catch (err) {
        throw err
    }
}

export function apiIsomorphic({route, backend}) {
    return async function(body=null) {
        if (typeof window != 'undefined') {
            const [method, path] = route
            return await apiFetch(method, path, body ?? undefined)
        } else {
            return await backend(body ?? undefined)
        }
    }
}

export const things = {
    getThings: apiIsomorphic({
        route: ['get', '/things'],
        backend: backend.things?.getThings
    }),
    addThing: async (body: Thing) => await apiFetch('post', '/things', body)
}
