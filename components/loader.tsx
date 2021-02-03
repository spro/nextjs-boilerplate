export default function Loader({color="bg-white"}) {
    return (
        <div className="loader flex flex-row gap-2 justify-center items-center">
            <Dot color={color} /><Dot color={color} /><Dot color={color} />
        </div>
       )
}

function Dot({color}) {
    return <div className={`dot rounded-full ${color} h-3 w-3`}></div>
}


