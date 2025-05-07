import Link from 'next/link';
import { hero } from './constant/media';
import Image from 'next/image';

export default function SplashScreen() {
  return (
    <div className="">
      <div className="flex flex-col items-center p-6">
        <Image 
          src={hero} 
          alt="shape" 
          width={250} 
          height={250} 
          className="object-fit" 
        />
        <div className="text-center mb-8">
          <h1 className="my-8 text-lg font-bold">Get things with TODs</h1>
          <p className="text-[13px] text-[#000000CC] w-[230px]">
          Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.
          </p>
        </div>
          <Link href="/sign-up" className="w-full bg-[#50C2C9] text-white py-3 px-6 rounded-lg text-center font-semibold text-lg">
            Get Started
          </Link>
      </div>
    </div>
  );
}