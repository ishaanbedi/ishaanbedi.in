import { about } from './data';
export default function About() {
    return (
        <>
            <div className="wrapper">
                <h1
                    className="bg-gradient-to-r bg-clip-text  text-transparent 
                    from-primary via-accent to-secondary pt-5 mt-5 xl:text-3xl text-2xl font-bold"
                >
                    {about.title}
                </h1>
                <div
                    className="text-slate-400 mt-4 "
                >
                    <p className='lg:w-96 md:w-96 sm:w-full'>
                        {about.description}
                    </p>
                </div>
            </div>
        </>
    )
}