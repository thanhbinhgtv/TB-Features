type LoginPayload = {
  email: string;
  password: string;
};

export async function loginWithEmail(payload: LoginPayload): Promise<{ email: string }> {
  if (!payload.email || !payload.password) {
    throw new Error("Email và mật khẩu là bắt buộc");
  }

  return Promise.resolve({ email: payload.email });
}

// services/auth.service.ts --- (Demo)
// import { loginApi } from './api/auth.api'

// export const loginService = async (data) => {
//   const res = await loginApi(data)

//   // 🎯 xử lý business logic ở đây
//   if (res.data.token) {
//     localStorage.setItem('token', res.data.token)
//   }

//   return res.data
// }