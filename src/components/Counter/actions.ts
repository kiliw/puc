import { createStandardAction } from 'typesafe-actions'

export const saveSession = createStandardAction('SAVE_SESSION')<number>()

export const clearSessions = createStandardAction('CLEAR_SESSIONS')<void>()
