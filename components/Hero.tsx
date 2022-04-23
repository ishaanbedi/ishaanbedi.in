import { details } from './data';
export default function Hero() {
    return (
        <>
            <div className="avatar">
                <div className="shadow-lg  w-24 rounded-full ring ring-blue ring-offset-base-100 ring-offset-2">
                    <img src="https://www.ishaanbedi.in/_next/image?url=%2Fstatic%2Fprofile.png&w=3840&q=75" />
                </div>
            </div>
            <h1
                className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400  to-blue-600 pt-5 xl:text-5xl text-4xl font-bold"
            >
                {details.name}
            </h1>

            <h3
                className="mt-5 text-gray-300 "
            >
                {details.headline}
            </h3>

        </>
    )
}