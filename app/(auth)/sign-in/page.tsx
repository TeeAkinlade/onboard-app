import AuthForm from '@/app/components/AuthForm';
import { resumption } from '@/app/constant/media';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <div className="px-6">
        <div className="flex flex-col items-center mb-6">
          <h1 className="my-4 text-lg text-center font-bold">Welcome back</h1>
          <Image
              src={resumption}
              alt="nav"
              width={100}
              height={100}
              className='w-52 object-cover'
          />
        </div>
        
        <AuthForm type="sign-in" />
        <p className="text-center mt-3">
          Don&apos;t have an account? <Link href="/sign-up" className="text-[#50C2C9]">Sign Up</Link>
        </p>
      </div>
    </>
  );
}