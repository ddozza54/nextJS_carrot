'use server';

import { z } from 'zod';

const usernameSchema = z.string().min(5).max(10);

export async function createAccount(
  prevState: any,
  formData: FormData
) {
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    passwordConfirm: formData.get('passwordConfirm'),
  };
  //서버에서 유효성 검사를 번거롭게 하고 싶지 않아 ZOD 를 사용
  usernameSchema.parse(data.username);
  console.log(data);
}
