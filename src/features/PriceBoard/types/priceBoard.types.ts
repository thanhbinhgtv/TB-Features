export type MarketRow = {
  symbol: string;
  ceiling: number;
  floor: number;
  reference: number;
  bid3Price: number;
  bid3Volume: number;
  bid2Price: number;
  bid2Volume: number;
  bid1Price: number;
  bid1Volume: number;
  matchPrice: number;
  matchVolume: number;
  change: number;
  changePct: number;
  ask1Price: number;
  ask1Volume: number;
  ask2Price: number;
  ask2Volume: number;
  ask3Price: number;
  ask3Volume: number;
};

export type MarketPatch = {
  symbol: string;
  changes: Partial<Omit<MarketRow, "symbol">>;
};
