'use client'

import { Card, Text, Metric, Flex, ProgressBar } from '@tremor/react'
import { ProgressCardTypes } from '@/types'

export default function ProgressCard(props: ProgressCardTypes) {
  const {
    metric = 34743,
    progressPercentage = 32,
    title = 'Sales',
    flexText = '32% of annual value',
  } = props

  return (
    <Card className='max-w-xs mx-auto'>
      <Text>{title}</Text>
      <Metric>$ {metric.toLocaleString()}</Metric>
      {typeof flexText === 'string' ? (
        <Flex className='mt-4'>
          <Text>{flexText}</Text>
        </Flex>
      ) : (
        <Flex className='mt-4'>
          {flexText.map((text) => (
            <Text>{text}</Text>
          ))}
        </Flex>
      )}
      <ProgressBar percentageValue={progressPercentage} className='mt-2' />
    </Card>
  )
}
