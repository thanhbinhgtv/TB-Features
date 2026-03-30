import type { ItemList } from "@/features/Skeleton/types/ItemList.types";

type ItemListProps = {
  items: ItemList[];
};

export function ItemListComponent({ items }: ItemListProps) {
  return (
    <section id="products" className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
      {/* <h2 className="text-xl font-semibold text-sky-900">Sản phẩm bán chạy</h2> */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <article key={`${item.name}-${index}`} className="rounded-xl border border-sky-100 bg-white p-4">
            {index === 0 ? (
              <div className="space-y-3">
                <div className="aspect-[4/4] animate-pulse rounded-lg bg-slate-200" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
                <div className="h-3 w-1/2 animate-pulse rounded bg-slate-100" />
                <div className="h-9 w-full animate-pulse rounded-lg bg-slate-200" />
                <div className="text-cyan-800 font-bold">{item.feature}</div>
              </div>
            ) : (
              <div className="aspect-[4/4] rounded-lg bg-gradient-to-br from-cyan-50 to-slate-800" />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
