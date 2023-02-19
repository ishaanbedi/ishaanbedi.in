import TopBar from "@/components/TopBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="bg-stone-900 text-stone-50 min-h-screen lg:md:sm:px-12 px-4 py-8 ">
        <div className="flex flex-col lg:md:items-center lg:md:justify-center">
          <section className="lg:md:sm:w-1/2 py-4">
            <TopBar />
          </section>
        </div>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}
