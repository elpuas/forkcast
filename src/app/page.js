'use client'
import { useEffect } from 'react';
import { Inter } from 'next/font/google'
import { testReadAuthors } from '../test/firebase-connection-test';
import { testAddAuthor } from '../test/firebase-post-test';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    testReadAuthors();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="flex flex-col items-center justify-center">
        <div className='flex flex-col items-center justify-center logo'>
          <h1 className={`text-[96px] text-black font-sans font-black ${inter.className}`}>Forkcast</h1>
          <button className=' text-base text-black bg-orange-400 px-4 py-3' onClick={testAddAuthor}>Add Test Author</button>
        </div>
      </header>
    </main>
  )
}
