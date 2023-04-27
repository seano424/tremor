import { Card, Title, BarChart, Subtitle } from '@tremor/react'

interface Props {
  title?: string
  subtitle?: string
  data: any[]
}

const BarChartView = ({
  title = 'Number of species threatened with extinction (2021)',
  subtitle = 'The IUCN Red List has assessed only a small share of the total known species in the world.',
  data,
}: Props) => (
  <Card>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <BarChart
      className='mt-6'
      data={data}
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
