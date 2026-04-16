"use client";

import { useEffect, useRef } from "react";
import { usePriceBoardDispatch, usePriceBoardSelector } from "./store/hooks";
import { patchRow } from "./store/priceBoard.slice";

function roundPrice(value: number) {
  return Number(value.toFixed(2));
}

const PriceBoardLiveFeed = () => {
  const dispatch = usePriceBoardDispatch();
  const rows = usePriceBoardSelector((state) => state.priceBoard.rows);
  const rowsRef = useRef(rows);

  useEffect(() => {
    rowsRef.current = rows;
  }, [rows]);

  useEffect(() => {
    if (rowsRef.current.length === 0) {
      return;
    }

    const timerId = window.setInterval(() => {
      const currentRows = rowsRef.current;
      const row = currentRows[Math.floor(Math.random() * currentRows.length)];
      const nextMatchPrice = roundPrice(Math.max(0.01, row.matchPrice + (Math.random() - 0.5) * 0.25));
      const nextChange = roundPrice(nextMatchPrice - row.reference);
      const nextChangePct = roundPrice((nextChange / row.reference) * 100);
      const volumeDelta = Math.max(1, Math.round((Math.random() - 0.35) * 500));

      dispatch(
        patchRow({
          symbol: row.symbol,
          changes: {
            matchPrice: nextMatchPrice,
            matchVolume: row.matchVolume + volumeDelta,
            change: nextChange,
            changePct: nextChangePct,
            bid1Volume: row.bid1Volume + Math.round(Math.random() * 120),
            bid2Volume: row.bid2Volume + Math.round(Math.random() * 120),
            bid3Volume: row.bid3Volume + Math.round(Math.random() * 120),
            ask1Volume: row.ask1Volume + Math.round(Math.random() * 120),
            ask2Volume: row.ask2Volume + Math.round(Math.random() * 120),
            ask3Volume: row.ask3Volume + Math.round(Math.random() * 120),
            bid1Price: roundPrice(Math.max(0.01, nextMatchPrice - 0.05)),
            bid2Price: roundPrice(Math.max(0.01, nextMatchPrice - 0.15)),
            bid3Price: roundPrice(Math.max(0.01, nextMatchPrice - 0.25)),
            ask1Price: roundPrice(nextMatchPrice + 0.05),
            ask2Price: roundPrice(nextMatchPrice + 0.15),
            ask3Price: roundPrice(nextMatchPrice + 0.25),
          },
        }),
      );
    }, 300);

    return () => window.clearInterval(timerId);
  }, [dispatch]);

  return null;
};

export default PriceBoardLiveFeed;
