import { about } from './data';
export default function About() {
    return (
        <>
            <h1
                className="text-transparent bg-clip-text bg-gradient-to-br from-primary  to-secondary pt-5 mt-5 xl:text-3xl text-2xl font-bold"
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