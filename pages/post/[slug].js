import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';

import BlockContent from '@sanity/block-content-to-react';


export const Post = ({ title, body, image }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'v9ehucvt',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <div>
      <div>
        {imageUrl && <img src={imageUrl} />}
        <h1>{title}</h1>

        <div>
          <BlockContent blocks={body} />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
  const url = `https://v9ehucvt.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      }
    }
  }
};

export default Post;