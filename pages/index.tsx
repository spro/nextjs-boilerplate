import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as Icons from 'heroicons-react'
import clsx from 'clsx'

import {thingsLoad, thingAdd, END} from '../store/actions'
import {reduxWrapper} from '../store/wrapper'
import type {AppState, Thing} from '../store/types'
import Loader from '../components/loader'
import Input from '../components/input'
import log from '../lib/log'

const DEBUG = true

export const getServerSideProps = reduxWrapper.getServerSideProps(async ({store, query}) => {
    if (query.preload) {
        log.info('preloading?')
        store.dispatch(thingsLoad())
        store.dispatch(END)
        await store.sagaTask.toPromise()
    }
})

export default function ThingsPage() {
    const {loading, loaded, adding, things, error} = useSelector((state: AppState) => state.things_page)
    const dispatch = useDispatch()

    const reload = () =>
        dispatch(thingsLoad())

    useEffect(() => {
        if (!loaded)
            reload()
    }, [])

    const randomThingAdd = () => {
        dispatch(thingAdd({word: 'wee', pronounciation: 'wfoe', definition: 'asdfma'}))
    }

    return (
        <div className="flex flex-col items-center min-h-screen text-gray-700 max-w-lg mx-auto p-6 md:py-12">
            <div className="w-full">
                <div className="flex flex-row items-center">
                    <h1 className="font-bold text-2xl flex-grow">Things</h1>
                    <Button onClick={randomThingAdd} color="green">
                        <Icons.Plus size={20} className={adding ? 'animate-spin-reverse' : null} /> Add
                    </Button>
                    <Button onClick={reload} className="ml-2">
                        <Icons.Refresh size={20} className={loading ? 'animate-spin-reverse' : null} /> Reload
                    </Button>
                </div>
                <div className="mt-4 bg-white border rounded-xl overflow-hidden shadow-lg">
                    {loading
                        ? <Loading />
                        : (error)
                            ? <Error error={error} />
                            : things
                                ? <ThingsList things={things} />
                                : <div />
                    }
                </div>
            </div>
            <p className="text-sm text-gray-400 mt-4 p-2 px-8 rounded italic">Look it's a footer.</p>
        </div>
    )
}

const Button = ({onClick, children, color='blue', className=null}) => {
    const button_class = clsx(
        "flex flex-row items-center font-bold px-2 py-1 rounded gap-2 cursor-pointer",
        `bg-${color}-600 hover:bg-${color}-700 text-${color}-100`,
        className
    )
    return <a className={button_class} onClick={onClick}>
        {children}
    </a>
}

const Loading = () =>
    <div className="p-8 bg-blue-100"><Loader color="bg-blue-200" /></div>

const Error = ({error}) =>
    <div>
        <p className="p-8 bg-red-100 text-red-800 font-bold">
            <Icons.Exclamation size={16} className="inline-block mr-2" />
            {error.message}
        </p>
        {(DEBUG && error.stack) &&
            <pre className="w-full overflow-x-scroll text-xs bg-red-200 text-red-800 p-8">{error.stack}</pre>
        }
    </div>

const ThingsList = ({things}: {things: Thing[]}) =>
    <div className="divide-y">
        {things.map(thing => <ThingItem thing={thing} key={thing.word} />)}
    </div>

const ThingItem = ({thing}) =>
    <div className="p-6">
        <div className="flex flex-row gap-2 items-center">
            <h2 className="text-xl font-bold">{thing.word}</h2>
            <p className="italic text-gray-400">{thing.pronounciation}</p>
        </div>
        <p className="mt-2">{thing.definition}</p>
    </div>

