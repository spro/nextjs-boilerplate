import * as Icons from 'heroicons-react'
import clsx from 'clsx'

export default function Input({type, value, onChange, placeholder, label, error}) {
    const input_className = clsx("w-full px-4 pb-3 placeholder-gray-400 border pt-9", {
        'rounded border-gray-300': !error,
        'rounded-t border-yellow-500': error,
    })
    return (
        <div className="relative w-full">
            <span className="absolute text-sm font-medium text-gray-400 pointer-events-none inset-x-4 inset-y-3">
                {label}
            </span>
            <input type={type} value={value} onChange={onChange} placeholder={placeholder} className={input_className} />
            {error &&
                <>
                    <p className="px-4 py-2 text-sm text-white bg-yellow-500 rounded-b">{error}</p>
                    <span className="absolute text-yellow-500 right-4 inset-y-1/4"><Icons.Exclamation /></span>
                </>
            }
        </div>
    )
}


