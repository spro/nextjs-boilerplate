import * as backend from '../../backend'
import {errorToJson} from '../../lib/helpers'

// TODO: Catch-all route with routes defined similar to lib/api

export default async function handler(req, res) {
    try {
        if (req.method == 'GET') {
            res.json(await backend.things.getThings())
        } else if (req.method == 'POST') {
            res.json(await backend.things.addThing(req.body))
        }
    } catch (error) {
        res.status(500).json({error: errorToJson(error)})
    }
}
