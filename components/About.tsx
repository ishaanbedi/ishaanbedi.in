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
                className="mt-4 text-gray-300 "
            >
                Hi, I am Ishaan & I love developing web applications.<br />
                I'm pursuing undergraduate engineering degree from MAIT, Delhi.<br />
                Currently, I am learning app development for the Apple Ecosystem in SwiftUI.<br />
            </h3>

        </>
    )
}