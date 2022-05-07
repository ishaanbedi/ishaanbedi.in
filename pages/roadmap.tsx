import Head from "next/head";
import Link from "next/link";
import { roadmapData } from "../components/data";
import Navbar from "../components/Navbar";
export default function Roadmap() {
    return (
        <>
            <Head>
                <title>
                    {roadmapData.title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>
            <Navbar />
            <div className="wrapper">
                <h1 className=" mx-12 my-4">Prototype of how this website will look in the upcoming updates.</h1>
                <div className="frame">
                    <iframe className="w-screen h-screen" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FM566srBsjEkhSJyriD032a%2FPortfolio-Website%3Fnode-id%3D0%253A1"></iframe>
                </div>
                <div className="home-button my-12 mx-12">
                    <Link href='/' passHref>
                        <button className="btn btn-primary btn-outline">Home</button>
                    </Link>
                </div>
            </div>
        </>
    )
}