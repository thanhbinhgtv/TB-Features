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
