import { createStandardAction } from 'typesafe-actions'

export const saveSession = createStandardAction('SAVE_SESSION')<number>()
