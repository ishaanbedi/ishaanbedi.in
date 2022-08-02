import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'v9ehucvt',
  dataset: 'production',
  useCdn: true,
});

