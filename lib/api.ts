import {delay} from './helpers'
import log from './log'
import * as backend from '../backend'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const DEBUG = true

async function apiFetch(method, path, body=null) {
    if (DEBUG) await delay(2000)

    const res = await fetch(API_BASE_URL + path, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: body && JSON.stringify(body)
    })
    log.info('res', res)

    try {
        const res_body = await res.json()
        log.info('res body', res_body)
        return res_body
    } catch (err) {
        log.error('res error', err)
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
    })
}
