import {getThings} from '../../backend/things'

// TODO: Catch-all route with routes defined similar to lib/api

export default async function handler(req, res) {
    try {
        const things = await getThings()
        res.json(things)
    }
    catch (err) {
        res.status(500).json({error: err.toString()})
    }
}
