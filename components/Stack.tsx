import { techStack } from './data';
export default function About() {
    return (
        <>
            <h1
                className="mt-8 text-transparent bg-clip-text bg-gradient-to-br from-cyan-400  to-blue-600 pt-5 xl:text-3xl text-2xl font-bold"
            >
                {techStack.title}
            </h1>

            <div className="columns-3 w-full flex flex-wrap -m-2 mt-4" >
                {techStack.stack.map((item, index) => (
                    <div key={index} className="card card-compact w-40  bg-gray-700 shadow-xl ml-3 mt-2">
                        <div className="card-body text-center">
                            <h2 className="text-bold text-lg text-gray-300 ">{item}</h2>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}