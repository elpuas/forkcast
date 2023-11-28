import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="flex flex-col items-center justify-center">
        <div className='flex flex-col items-center justify-center logo'>
          <h1 className={`text-[96px] text-black font-sans font-black ${inter.className}`}>Forkcast</h1>
        </div>
      </header>
    </main>
  )
}
