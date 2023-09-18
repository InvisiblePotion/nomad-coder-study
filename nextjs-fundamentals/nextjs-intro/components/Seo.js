import Head from "next/head";

export default function Seo({ title }) {
  return (
    <div>
      <Head>
        <title>{`${title} | Next Movies`}</title>
      </Head>
    </div>
  )
}