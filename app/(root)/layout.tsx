import React, { ReactNode } from 'react'
import Navbarhead from '@/components/navbar/Navbarhead';
import BackgroundBlobs from '@/components/blobs/BackgroundBlobs';
const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <>
      <BackgroundBlobs/>
      <div className="fixed inset-0 backdrop-blur-[100px] z-10 pointer-events-none"/>
      <div className="relative flex flex-col justify-items-center min-h-screen z-20">
          <Navbarhead/>
        <main className='grow'>
          {children}
        </main>
      </div>
    </>
  );
};

export default RootLayout