export function HeroSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="rounded-2xl bg-gradient-to-r from-sky-900 to-cyan-700 px-6 py-10 text-white sm:px-10">
        <p className="text-sm text-cyan-100">Hải sản tươi mỗi ngày - kiểm định chất lượng đầu vào</p>
        <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Đặc sản biển giao tận nhà</h1>
        <p className="mt-3 max-w-2xl text-sm text-cyan-50 sm:text-base">
          Chọn nhanh hải sản theo mùa, nguồn gốc rõ ràng và được làm sạch theo yêu cầu. Đặt trước
          17:00 để nhận hàng trong ngày tại nội thành.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-sky-900 hover:bg-cyan-50">
            Mua ngay
          </button>
          <button className="rounded-lg border border-cyan-100 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-800">
            Xem khuyến mãi
          </button>
        </div>
      </div>
    </section>
  );
}
