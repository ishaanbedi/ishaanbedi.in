import Head from 'next/head'
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Home({ posts }) {
    const router = useRouter();
    const [mappedPosts, setMappedPosts] = useState([]);

    useEffect(() => {
        if (posts.length) {
            const imgBuilder = imageUrlBuilder({
                projectId: 'v9ehucvt',
                dataset: 'production',
            });

            setMappedPosts(
                posts.map(p => {
                    return {
                        ...p,
                        mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
                    }
                })
            );
        } else {
            setMappedPosts([]);
        }
    }, [posts]);

    return (
        <div>
            <Head>
                <title>
                    Ishaan Bedi : Posts
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>

            <div className='flex flex-col items-center flex-wrap '>
                <h3 className='text-3xl my-8 mx-2 hover:text-info-content'>Recent posts I&apos;ve published.</h3>
                <div className='flex flex-row justify-center flex-wrap'>
                    {mappedPosts.length ? mappedPosts.map((p, index) => (
                        <div onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className='mx-2 my-2 border-2 border-info-content hover:border-accent-content cursor-pointer p-2 text-center'>
                            <img src={p.mainImage}  alt='Blog Image' />
                            <h3 className='text-info-content font-semibold my-2'>{p.title}</h3>
                        </div>
                    )) : <>Error fetching posts! Please refresh the page.<br />If the error persists, please let me know at hi@ishaanbedi.in</>}
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps = async pageContext => {
    const query = encodeURIComponent('*[ _type == "post" ]');
    const url = `https://v9ehucvt.api.sanity.io/v1/data/query/production?query=${query}`;
    const result = await fetch(url).then(res => res.json());

    if (!result.result || !result.result.length) {
        return {
            props: {
                posts: [],
            }
        }
    } else {
        return {
            props: {
                posts: result.result,
            }
        }
    }
};

