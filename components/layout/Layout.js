import Navigation from "../navigation/Navigation";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main className={styles.container}>{children}</main>
    </div>
  );
};

export default Layout;
