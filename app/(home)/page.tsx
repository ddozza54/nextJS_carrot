import Link from 'next/link';
import "@/lib/db"

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-between min-h-screen p-6'>
            <div className='my-auto flex flex-col justify-center items-center'>
                <span className='text-9xl'>🥕</span>
                <h1 className='text-3xl'>당근</h1>
                <h2>당근 마켓에 어서오세요!</h2>
            </div>
            <div className='flex flex-col w-full items-center'>
                <Link href='/create-account'
                    className='primary-btn py-2.5 text-lg'>시작하기</Link>
                <div>
                    <span>이미 계정이 있나요?</span>
                    <Link href='/login' className='hover:underline'>로그인</Link>
                </div>
            </div>
        </div>
    );
}

