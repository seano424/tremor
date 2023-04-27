import { KPICardTypes, AnimalDataTypes } from './types'

export const kpiData: KPICardTypes[] = [
  {
    title: 'Sales',
    metric: '$ 12,699',
    progress: 15.9,
    target: '$ 80,000',
    delta: '13.2%',
    deltaType: 'moderateIncrease',
  },
  {
    title: 'Profit',
    metric: '$ 45,564',
    progress: 36.5,
    target: '$ 125,000',
    delta: '23.9%',
    deltaType: 'increase',
  },
  {
    title: 'Customers',
    metric: '$ 1,072',
    progress: 53.6,
    target: '2,000',
    delta: '10.1%',
    deltaType: 'moderateDecrease',
  },
]

export const animalData: AnimalDataTypes[] = [
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
