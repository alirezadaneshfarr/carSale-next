import styles from "./Categories.module.scss";
import Link from "next/link";
import Suv from "../icons/Suv";
import Sedan from "../icons/Sport";
import Sport from "../icons/Sport";
import Hatchback from "../icons/Hatchback";


const Categories = () => {
    return (
        <div className={styles.container}>
            <Link href="/categories/sedan">
            <div>
                <p>Sedan</p>
                <Sedan />
            </div>
            </Link>
            <Link href="/categories/sport">
            <div>
                <p>Sport</p>
                <Sport />
            </div>
            </Link>
            <Link href="/categories/suv">
            <div>
                <p>SUV</p>
                <Suv />
            </div>
            </Link>
            <Link href="/categories/hatchback">
            <div>
                <p>Hatchback</p>
                <Hatchback />
            </div>
            </Link>
        </div>
    );
};

export default Categories;