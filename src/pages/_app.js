import "antd/dist/antd.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import GlobalContextWrapper from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContextWrapper>
  );
}

export default MyApp;
