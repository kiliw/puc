import { createStandardAction } from 'typesafe-actions'

export const increasePullUps = createStandardAction('INCREASE_PULL_UPS')<void>()

export const decreasePullUps = createStandardAction('DECREASE_PULL_UPS')<void>()

export const resetPullUps = createStandardAction('RESET_PULL_UPS')<void>()

export const savePullUps = createStandardAction('SAVE_PULL_UPS')<number>()
