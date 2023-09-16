import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <style jsx global>{`
          .active {
            color: tomato;
          }
        `}</style>
      </Layout>
    </>
  );
}
