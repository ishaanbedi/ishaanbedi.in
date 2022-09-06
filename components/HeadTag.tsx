import Head from "next/head";
const HeadTag = (props) => {
  return (
    <div>
      <Head>
        <title>{props.name} | Developer</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width user-scalable=no "
        />
      </Head>
    </div>
  );
};

export default HeadTag;
