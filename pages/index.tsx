import * as React from "react";
import * as ph from "@plasmicapp/host";
import { ScreenVariantProvider } from "../components/plasmic/ishaanbedi_in/PlasmicGlobalVariant__Screen";
import { PlasmicHomepage } from "../components/plasmic/ishaanbedi_in/PlasmicHomepage";
import { useRouter } from "next/router";
import Head from "next/head";

function Homepage() {
  return (
    <>
      <Head>
        <title>Ishaan Bedi</title>
      </Head>
      <ph.PageParamsProvider
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicHomepage />
      </ph.PageParamsProvider>
    </>
  );
}

export default Homepage;
