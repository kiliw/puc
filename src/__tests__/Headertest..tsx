/**
 * @format
 */

import React from 'react'
import 'react-native'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import { Header } from '../components/Header'

it('renders the header', () => {
  renderer.create(<Header />)
})
