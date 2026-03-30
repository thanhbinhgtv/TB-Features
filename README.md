## Node.js requirement
This project uses Next.js 16 and requires Node.js `>=20.9.0`.
If you are on Windows and use `nvm-windows`:

```bash
nvm install 20.9.0
nvm use 20.9.0
```

## Run
First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Note
- File .nvmrc dùng để khóa version Node chuẩn cho project.
- Khi mở repo, mọi người biết ngay nên dùng Node nào (ở đây là 20.9.0).
- Tránh lỗi kiểu “máy A chạy được, máy B không chạy được” do lệch Node.
- CI/CD hoặc script cũng dễ đọc version thống nhất từ file này.

## prettier-plugin-tailwindcss
- https://github.com/tailwindlabs/prettier-plugin-tailwindcss
- cấu hình prettier.config.js