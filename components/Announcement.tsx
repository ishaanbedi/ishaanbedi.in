import { useState } from 'react'

function Announcement() {
    const [announcementVisibility, setAnnouncementVisibility] = useState(false)
    return (
        <>
            <section className={announcementVisibility ? "hidden" : "visible"}>
                <div className="relative px-4 py-2 bg-info-content text-primary pr-14">
                    <p className="text-sm font-medium text-center">
                        Check out my latest project {' '}
                        <a className="underline underline-offset-2 hover:font-bold" href="https://supatype.vercel.app" target={'_blank'} rel="noreferrer" >SupaType</a>
                    </p>
                    <button
                        aria-label="Close"
                        className="absolute p-1 transition -translate-y-1/2 rounded-lg top-1/2 right-4 bg-black/10 hover:bg-black/20"
                        onClick={() => { setAnnouncementVisibility((e) => !e) }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Announcement