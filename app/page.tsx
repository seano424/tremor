import clsx from 'clsx'
import { Inter } from 'next/font/google'
import ProgressCard from '@/components/ProgressCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={clsx('py-10', inter.className)}>
      <ProgressCard
        title='Progress'
        flexText={['something', 'something else']}
      />
    </main>
  )
}
