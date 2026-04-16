import type { MarketRow } from "../types/priceBoard.types";

function createRow(
  symbol: string,
  reference: number,
  spread = 0.15,
  baseVolume = 1_000,
): MarketRow {
  const bid1Price = Number((reference - 0.05).toFixed(2));
  const bid2Price = Number((bid1Price - spread).toFixed(2));
  const bid3Price = Number((bid2Price - spread).toFixed(2));

  const ask1Price = Number((reference + 0.05).toFixed(2));
  const ask2Price = Number((ask1Price + spread).toFixed(2));
  const ask3Price = Number((ask2Price + spread).toFixed(2));

  const matchPrice = Number((reference + (Math.random() - 0.5) * 0.4).toFixed(2));
  const change = Number((matchPrice - reference).toFixed(2));
  const changePct = Number(((change / reference) * 100).toFixed(2));

  return {
    symbol,
    ceiling: Number((reference * 1.07).toFixed(2)),
    floor: Number((reference * 0.93).toFixed(2)),
    reference,
    bid3Price,
    bid3Volume: Math.round(baseVolume * 2.8),
    bid2Price,
    bid2Volume: Math.round(baseVolume * 1.9),
    bid1Price,
    bid1Volume: Math.round(baseVolume * 1.4),
    matchPrice,
    matchVolume: Math.round(baseVolume * 3.5),
    change,
    changePct,
    ask1Price,
    ask1Volume: Math.round(baseVolume * 1.6),
    ask2Price,
    ask2Volume: Math.round(baseVolume * 1.2),
    ask3Price,
    ask3Volume: Math.round(baseVolume * 2.1),
  };
}

export const priceBoardMockRows: MarketRow[] = [
  createRow("ACB", 24.0, 0.1, 2_700),
  createRow("BID", 40.4, 0.15, 7_500),
  createRow("CTG", 34.9, 0.1, 3_600),
  createRow("DGC", 56.3, 0.2, 2_000),
  createRow("FPT", 76.2, 0.2, 1_400),
  createRow("GAS", 79.3, 0.15, 2_900),
  createRow("GVR", 32.7, 0.1, 1_800),
  createRow("HDB", 26.1, 0.1, 6_200),
  createRow("HPG", 28.55, 0.05, 7_200),
  createRow("LPB", 48.0, 0.1, 900),
  createRow("MBB", 26.7, 0.1, 5_600),
  createRow("SSI", 27.4, 0.1, 4_100),
  createRow("TCB", 45.7, 0.15, 4_700),
  createRow("VCB", 86.5, 0.2, 1_600),
  createRow("VHM", 43.2, 0.15, 2_300),
  createRow("VIC", 59.8, 0.2, 2_800),
  createRow("VNM", 63.4, 0.15, 1_900),
  createRow("VPB", 19.85, 0.05, 9_400),
  createRow("VRE", 22.4, 0.1, 3_200),
  createRow("MSN", 68.1, 0.2, 1_300),
];
