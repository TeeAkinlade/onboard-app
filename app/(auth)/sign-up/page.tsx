import AuthForm from '@/app/components/AuthForm';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <>
      <div className="px-6">
        <h1 className="my-4 text-lg text-center font-bold">Welcome to Onboard!</h1>
        <p className="text-[13px] text-[#000000CC] text-center !leading-[157%] mb-4">Left helps to meet up your <br />texts.</p>
        
        <AuthForm type="sign-up" />
        
        <p className="text-center mt-4">
          Already have an account? <Link href="/sign-in" className="text-[#50C2C9]">Sign in</Link>
        </p>
      </div>
    </>
  );
}
