import { details } from './data';
import Image from 'next/image';
export default function Hero() {
    return (
        <>
            <div className="avatar">
                <div className="shadow-lg  w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image alt='Profile Image' width={100} height={100} src="/profile.jpeg" />
                </div>
            </div>
            <h1
                className="bg-gradient-to-r bg-clip-text  text-transparent 
            from-blue-500 via-purple-500 to-cyan-500
            animate-text pt-5 xl:text-5xl text-4xl font-bold"
            >
                {details.name}
            </h1>

            <h3
                className="text-slate-400 mt-2  "
            >
                {details.headline}
            </h3>

        </>
    )
}