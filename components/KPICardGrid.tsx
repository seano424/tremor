'use client'

import { useState } from 'react'
import { Grid, Text, Tab, TabList, Title, Card } from '@tremor/react'

import { kpiData } from '@/data'
import KPICard from './KPICard'
import ChartView from './ChartView'
import TableView from './TableView'
import BarChartView from './BarChartView'

export default function KPICardGrid() {
  const [selectedView, setSelectedView] = useState('1')

  return (
    <>
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabList
        defaultValue='1'
        onValueChange={(value) => setSelectedView(value)}
        className='mt-6'
      >
        <Tab value='1' text='Overview' />
        <Tab value='2' text='Detail' />
      </TabList>

      {selectedView === '1' ? (
        <>
          <Grid numColsLg={3} className='mt-6 gap-6'>
            {kpiData.map((item) => (
              <KPICard key={item.title} {...item} />
            ))}
          </Grid>

          <div className='mt-6'>
            <ChartView />
          </div>
        </>
      ) : (
        <>
          <TableView />
          <div className='mt-6'>
            <BarChartView />
          </div>
        </>
      )}
    </>
  )
}
