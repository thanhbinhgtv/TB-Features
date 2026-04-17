"use client";

import { usePriceBoardDispatch, usePriceBoardSelector } from "../store/hooks";
import { setActiveTab, setSearchTerm } from "../store/priceBoard.slice";
import styles from "../styles/priceBoard.module.scss";

const tabs = [
  "Danh muc cua toi",
  "VN30",
  "HNX30",
  "HOSE",
  "HNX",
  "UPCOM",
  "Trai phieu rieng le",
  "CP Nganh",
  "Thoa thuan",
  "Phai sinh",
  "Chung quyen",
  "ETF",
  "Lo le",
];

const PriceBoardToolbar = () => {
  const dispatch = usePriceBoardDispatch();
  const activeTab = usePriceBoardSelector((state) => state.priceBoard.activeTab);
  const searchTerm = usePriceBoardSelector((state) => state.priceBoard.searchTerm);

  return (
    <div className={styles.toolbar}>
      <input
        className={styles.search}
        placeholder="Tim kiem CK"
        value={searchTerm}
        onChange={(event) => dispatch(setSearchTerm(event.target.value))}
      />
      <div className={styles.tabs} role="tablist" aria-label="Price board filters">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab}${activeTab === tab ? ` ${styles.tabActive}` : ""}`}
            type="button"
            onClick={() => dispatch(setActiveTab(tab))}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PriceBoardToolbar;
