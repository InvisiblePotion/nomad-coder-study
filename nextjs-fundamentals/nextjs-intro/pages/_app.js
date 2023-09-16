import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <style jsx global>{`
          nav a {
            font-weight: 600;
            font-size: 18px;
          }
          .active {
            color: tomato;
          }
        `}</style>
      </Layout>
    </>
  );
}
