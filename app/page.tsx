import clsx from 'clsx'
import { Inter } from 'next/font/google'
import KPICardGrid from '@/components/KPICardGrid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={clsx('p-10', inter.className)}>
      <KPICardGrid />
    </main>
  )
}
