"use client";
import FormButton from '@/components/form-btn';
import FormInput from '@/components/form-input';
import SocialLogin from '@/components/social-login';
import { useFormState } from 'react-dom';
import { createAccount } from './actions';

export default function CreateAccount() {
    const [state, dispatch] = useFormState(createAccount, null)
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl">Fill in the form below to join!</h2>
            </div>
            <form action={dispatch} className="flex flex-col gap-3">
                <FormInput name='username' type='text' placeholder='Username' required={true} errors={['Username is toooooo short']} />
                <FormInput name='email' type='email' placeholder='Email' required={true} />
                <FormInput name='password' type='password' placeholder='Password' required={true} />
                <FormInput name='passwordConfirm' type='password' placeholder='Comfirm Password' required={true} />
                <FormButton text='Create Account' />
            </form>
            <SocialLogin />
        </div>
    );
}
