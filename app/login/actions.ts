'use server';

import { error } from 'console';
import { redirect } from 'next/dist/server/api-utils';

export async function handleForm(
  prevState: any,
  formData: FormData
) {
  console.log(
    formData.get('email'),
    formData.get('password')
  );
  console.log('i run in the server!');
  return {
    errors: ['wrong Password', 'password is too short'],
  };
}
