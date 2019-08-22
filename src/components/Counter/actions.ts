import { createStandardAction } from 'typesafe-actions'

export const savePullUps = createStandardAction('SAVE_PULL_UPS')<number>()

export const saveDay = createStandardAction('SAVE_DAY')<number>()

