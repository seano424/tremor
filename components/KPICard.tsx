'use client'

import {
  BadgeDelta,
  Card,
  Flex,
  Metric,
  ProgressBar,
  Text,
} from '@tremor/react'

import { KPICardTypes } from '@/types'

export default function KPICard(props: KPICardTypes) {
  const {
    metric = '$ 34,743',
    progress = 32,
    title = 'Sales',
    target = '80,000',
    delta = '32% of annual value',
    deltaType = 'moderateIncrease',
  } = props

  return (
    <Card key={title}>
      <Flex alignItems='start'>
        <div className='truncate'>
          <Text>{title}</Text>
          <Metric className='truncate'>{metric}</Metric>
        </div>
        <BadgeDelta className='py-2 px-3' deltaType={deltaType}>
          {delta}
        </BadgeDelta>
      </Flex>
      <Flex className='mt-4 space-x-2'>
        <Text className='truncate'>{`${progress}% (${metric})`}</Text>
        <Text>{target}</Text>
      </Flex>
      <ProgressBar percentageValue={progress} className='mt-2' />
    </Card>
  )
}
