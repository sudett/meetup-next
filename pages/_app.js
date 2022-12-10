import Layout from "../components/layout/Layout";
import { MeetupProvider } from "../contexts/MeetupContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MeetupProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MeetupProvider>
  );
}

export default MyApp;
