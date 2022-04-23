import { about } from './data';
export default function About() {
    return (
        <>
            <h1
                className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400  to-blue-600 pt-5 mt-5 xl:text-3xl text-2xl font-bold"
            >
                {about.title}
            </h1>
            <h3
                className="text-slate-400 mt-4 "
            >
                Hi, I am Ishaan &amp; I develop web applications.<br />
                
            </h3>

        </>
    )
}