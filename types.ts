import { DeltaType } from '@tremor/react'

export type KPICardTypes = {
  title?: string
  metric?: string
  progress?: number
  target?: string
  delta?: string
  deltaType?: DeltaType
}
