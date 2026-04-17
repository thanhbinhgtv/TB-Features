"use client";

import PriceBoardLiveFeed from "./PriceBoardLiveFeed";
import PriceBoardProvider from "./components/PriceBoardProvider";
import PriceBoardTable from "./components/PriceBoardTable";
import PriceBoardToolbar from "./components/PriceBoardToolbar";
import styles from "./styles/priceBoard.module.scss";

const PriceBoardComponent = () => {
  return (
    <PriceBoardProvider>
      <PriceBoardLiveFeed />
      <section className={styles.priceBoardRoot}>
        <PriceBoardToolbar />
        <PriceBoardTable />
      </section>
    </PriceBoardProvider>
  );
};

export default PriceBoardComponent;
