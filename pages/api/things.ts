import {getThings} from '../../backend/things'
import {errorToJson} from '../../lib/helpers'

// TODO: Catch-all route with routes defined similar to lib/api

export default async function handler(req, res) {
    try {
        const things = await getThings()
        res.json(things)
    }
    catch (error) {
        res.status(500).json({error: errorToJson(error)})
    }
}
