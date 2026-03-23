export function Footer() {
  return (
    <footer id="footer" className="mt-8 border-t border-sky-200 bg-sky-950 text-sky-50">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">TB SEAFOOD</h3>
          <p className="mt-3 text-sm text-sky-100">
            Chuyên hải sản tươi sống, giao nhanh trong ngày
          </p>
          <p className="mt-2 text-sm text-sky-100">Địa chỉ: Chợ Đạo Tú - Tam Dương - Vĩnh Phúc</p>
          <p className="mt-2 text-sm text-sky-100">Email: cskh@tbseafood.vn</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Hỗ trợ khách hàng</h4>
          <ul className="mt-3 space-y-2 text-sm text-sky-100">
            <li>Hướng dẫn đặt hàng</li>
            <li>Phương thức thanh toán</li>
            <li>Quy định giao hàng</li>
            <li>Chính sách đổi trả</li>
          </ul>
        </div>

        <div className="rounded-xl bg-sky-900/60 p-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Đặt hàng nhanh</h4>
          <p className="mt-3 text-sm text-sky-100">Tư vấn chọn hải sản theo nhu cầu gia đình và nhà hàng.</p>
          <p className="mt-3 text-2xl font-bold text-white">0912 345 678</p>
          <p className="mt-1 text-xs text-sky-100">08:00 - 21:00 (Thứ 2 - Chủ nhật)</p>
        </div>
      </div>

      <div className="border-t border-sky-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-sky-200 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 TB-Store</p>
          <p>SĐT: 0912 345 678</p>
        </div>
      </div>
    </footer>
  );
}
