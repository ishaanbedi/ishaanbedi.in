import { techStack } from './data';
export default function About() {
    return (
        <>
            <div>
                <div className="w-full">
                    <h1
                        className="mt-8 bg-gradient-to-r bg-clip-text  text-transparent 
                        from-primary via-accent to-secondary pt-5 xl:text-3xl text-2xl font-bold"
                    >
                        {techStack.title}
                    </h1>
                    <h3
                        className="text-slate-400 mt-2"
                    >
                        {techStack.description}
                    </h3>
                </div>

                <div>
                    <div className="mt-4 lg:w-96 md:w-96 sm:w-full">
                        <div className="w-full flex flex-wrap  -m-2">
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
            </div>
        </>
    )
}