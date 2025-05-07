'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type AuthFormProps = {
  type: 'sign-in' | 'sign-up';
};

export default function AuthForm({ type }: AuthFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    ...(type === 'sign-up' && {
      fullName: '',
      confirmPassword: ''
    })
  });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password || (type === 'sign-up' && (!formData.fullName || !formData.confirmPassword))) {
      alert('Please fill in all required fields.');
      return;
    }
    
    router.push('/home');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {type === 'sign-up' && (
        <div>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 rounded-full text-[#000000CC] bg-white mb-2 text-[13px] ring-0 outline-none"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>
      )}
      
      <div>
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full p-3 rounded-full text-[#000000CC] bg-white mb-2 text-[13px] ring-0 outline-none"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>
      
      <div>
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 rounded-full text-[#000000CC] bg-white mb-2 text-[13px] ring-0 outline-none"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
      </div>
      
      {type === 'sign-up' && (
        <div>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full p-3 rounded-full text-[#000000CC] bg-white mb-2 text-[13px] ring-0 outline-none"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          />
        </div>
      )}

      {type === 'sign-in' && (
        <div className="text-center">
            <Link 
            href="#"
            className='text-[13px] text-[#50C2C9] text-center font-normal mt-4'
            >
                Forget password ?
            </Link>
        </div>
      )}
      
      <button
        type="submit"
        className="w-full mt-5 cursor-pointer bg-[#50C2C9] text-white py-3 px-6 rounded-lg text-center font-semibold text-lg"
      >
        {type === 'sign-in' ? 'Login' : 'Register'}
      </button>
    </form>
  );
}