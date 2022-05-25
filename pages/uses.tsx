import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import { usesData } from '../components/data';

export default function Uses() {
    return (
        <>
            <Head>
                <title>
                    {usesData.title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>
            <Navbar />
            <div className={styles.container} >
                <section className='mt-7 lg:pl-3 max-w-4xl m-auto w-full'>
                    <h1 className="lg:text-6xl text-3xl font-bold lg:mt-16 text-transparent bg-clip-text bg-gradient-to-br from-primary  to-secondary">Uses</h1>
                    <p className='my-4'>Check out this <a target={'_blank'} rel="noreferrer" className=' font-bold link text-primary link-hover underline-offset-4 hover:underline text-bold' href='https://uses.tech/'>site</a> for a comprehensive list of /uses pages.</p>
                    <div className="editors-div my-8">
                        <h1 className='font-bold lg:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-br from-primary  to-secondary'>Editors</h1>
                        <ul className='list-disc mt-4 ml-2'>
                            <li className='font-bold link text-primary link-hover underline-offset-4 hover:underline text-bold'><a href='https://code.visualstudio.com/insiders/' rel="noreferrer" target={'_blank'}>Visual Studio Code - Insiders Edition</a></li>
                            <li className='ml-8'><a className='font-bold link text-primary link-hover underline-offset-4 hover:underline text-bold' href='https://marketplace.visualstudio.com/items?itemName=sdras.night-owl' rel="noreferrer"  target='_blank'>Night Owl</a> theme with <a className='font-bold link text-primary link-hover underline-offset-4 hover:underline text-bold' href='https://philpl.gumroad.com/l/dank-mono' rel="noreferrer" target='_blank'>Dank Mono </a> &amp; <a className='font-bold link text-primary link-hover underline-offset-4 hover:underline text-bold' href='https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme' target='_blank' rel="noreferrer">Material Icons.</a></li>
                            <li className='ml-8'>A bunch of <a className='font-bold link text-primary link-hover underline-offset-4 hover:underline text-bold' href='https://howivscode.com/ishaanbedi'>extensions.</a></li>
                            <li><a className='font-bold link text-primary link-hover underline-offset-4 hover:underline text-bold' href='https://apps.apple.com/us/app/xcode/id497799835?mt=12' rel="noreferrer" target='_blank'>Xcode</a> to build iOS applications.</li>
                        </ul>
                    </div>
                    <div className="terminal-div my-8">
                        <h1 className='font-bold lg:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-br from-primary  to-secondary'>Terminal</h1>
                        <ul className='list-disc mt-4 ml-2'>
                            <li>Hyper</li>
                            <li className='ml-8'>Oh My Zsh.</li>
                            <li className='ml-8'>Verminal</li>
                            <li className='ml-8'>Fig</li>
                        </ul>
                    </div>
                    <div className="Git-Client-div my-8">
                        <h1 className='font-bold lg:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-br from-primary  to-secondary'>Git Client</h1>
                        <ul className='list-disc mt-4 ml-2'>
                            <li>Github Desktop</li>
                        </ul>
                    </div>
                    <div className="Git-Client-div my-8">
                        <h1 className='font-bold lg:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-br from-primary  to-secondary'>API Testing</h1>
                        <ul className='list-disc mt-4 ml-2'>
                            <li>Postman</li>
                        </ul>
                    </div>
                    <div className="softwares-div my-8">
                        <h1 className='font-bold lg:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-br from-primary  to-secondary'>Other Softwares</h1>
                        <ul className='list-disc mt-4 ml-2'>
                            <li>Notion</li>
                            <li>Figma</li>
                            <li>Spotify</li>
                            <li>Discord</li>
                        </ul>
                    </div>
                </section>

            </div>
        </>
    )
}