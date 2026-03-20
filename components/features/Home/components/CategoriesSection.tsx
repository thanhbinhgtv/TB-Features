type CategoriesSectionProps = {
  categories: string[];
};

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <section id="categories" className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-sky-900">Danh mục hải sản</h2>
        <a className="text-sm text-sky-700 hover:text-sky-900" href="#">
          Xem tất cả
        </a>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <div
            key={category}
            className="rounded-xl border border-sky-100 bg-white px-4 py-6 text-center text-sm font-semibold text-zinc-700 hover:border-sky-300 hover:text-sky-800"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}
