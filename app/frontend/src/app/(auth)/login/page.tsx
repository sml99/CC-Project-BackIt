export const metadata = {
  title: 'BackIt - Login',
};
// import LoginForm from '@/components/partials/app/auth/login/login-form';
import LoginImage from '@public/assets/images/auth/logo.png';

import Image from 'next/image';

export default function page() {
  return (
    <section className="flex w-full justify-center ">
      <div className="flex flex-col items-center justify-start w-[80vw] h-[80vh] overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="relative  w-[50%] h-[50%] flex items-center justify-center">
          <Image
            objectFit="cover"
            fill
            className="object-fit"
            src={LoginImage}
            alt={'logo'}
          />
        </div>
        <div className="col-span-3 p-16 font-decimalMedium text-black-500 ">
          <div className="mb-4 w-full">
            <h1 className="mb-4 text-3xl ">Login</h1>
            <h2>Hi , Welcome back</h2>
          </div>
          {/* <LoginForm /> */}
        </div>
      </div>
    </section>
  );
}
