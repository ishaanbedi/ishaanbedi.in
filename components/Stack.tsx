import { techStack } from './data';
export default function About() {
    return (
        <>

            {/* <div className="w-full flex flex-wrap -m-2 mt-4" >
                {techStack.stack.map((item, index) => (
                    <div key={index} className="card card-compact  bg-gray-700 shadow-xl ml-3 mt-2">
                        <div className="card-body text-center">
                            <h2 className="text-bold text-lg text-gray-300 ">{item}</h2>
                        </div>
                    </div>
                ))}
            </div> */}
            <div>
                <div className="overflow-x-hidden  w-full">
                    <h1
                        className="mt-8 text-transparent bg-clip-text bg-gradient-to-br from-cyan-400  to-blue-600 pt-5 xl:text-3xl text-2xl font-bold"
                    >
                        {techStack.title}
                    </h1>
                </div>

                <div>
                    <div className="overflow-x-hidden mt-4 w-full">

                    </div>
                    <div className="w-full flex flex-wrap -m-2">
                        {techStack.stack.map((item, index) => (
                            <span
                                className="border-slate-400	text-slate-400 border rounded-lg m-2 px-3 py-1"
                                key={index}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}