import { ItemListComponent } from "./components/ItemList";
import type {
  ItemList,
} from "@/features/Skeleton/types/ItemList.types";

export const HomePage = () => {
  const featuredProducts: ItemList[] = [
    { name: "Skeleton", feature: "Skeleton" },
    { name: "unkow", feature: "---" },
    { name: "unkow", feature: "---" },
    { name: "unkow", feature: "---" },
    { name: "unkow", feature: "---" },
    { name: "unkow", feature: "---" },
  ];

  return (
    <main className="min-h-screen text-zinc-900">
      <ItemListComponent items={featuredProducts} />
    </main>
  );
};

export default HomePage;
