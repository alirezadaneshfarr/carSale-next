import Link from "next/link";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <h2>A.Daneshfar Car</h2>
                    <p>Choose a car to Buy it!</p>
                </Link>
            </header>

            <div>{children}</div>

            <footer className={styles.footer}>
                <h4>A.Daneshfar Next.js | A.Dan Car Project &copy;</h4>
            </footer>
        </>
    );
};

export default Layout;