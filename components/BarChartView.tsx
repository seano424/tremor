import { Card, Title, BarChart, Subtitle } from '@tremor/react'

const chartdata = [
  {
    name: 'Amphibians',
    'Number of threatened species': 2488,
    'Estimated number of species in total': 10023,
  },
  {
    name: 'Birds',
    'Number of threatened species': 1445,
    'Estimated number of species in total': 12223,
  },
  {
    name: 'Crustaceans',
    'Number of threatened species': 743,
    'Estimated number of species in total': 13223,
  },
  {
    name: 'Reptiles',
    'Number of threatened species': 143,
    'Estimated number of species in total': 14423,
  },
  {
    name: 'Insects',
    'Number of threatened species': 2743,
    'Estimated number of species in total': 10623,
  },
]

const BarChartView = () => (
  <Card>
    <Title>Number of species threatened with extinction (2021)</Title>
    <Subtitle>
      The IUCN Red List has assessed only a small share of the total known
      species in the world.
    </Subtitle>
    <BarChart
      className='mt-6'
      data={chartdata}
      index='name'
      categories={[
        'Number of threatened species',
        'Estimated number of species in total',
      ]}
      colors={['blue', 'teal', 'amber', 'rose', 'indigo', 'emerald']}
    />
  </Card>
)

export default BarChartView
