import { about } from './data';
export default function About() {
    return (
        <>
            <h1
                className="bg-gradient-to-r bg-clip-text  text-transparent 
                from-blue-500 via-purple-500 to-cyan-500
                animate-text  pt-5 mt-5 xl:text-3xl text-2xl font-bold"
            >
                {about.title}
            </h1>
            <div
                className="text-slate-400 mt-4 "
            >
                <p>
                    Into iOS &amp; Web Development. <br />Apple&apos;s Swift Student Challenge  &apos;22 Winner.
                </p>
            </div>
        </>
    )
}