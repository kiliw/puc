/**
 * @format
 */

import React from 'react'
import 'react-native'
import { Text } from 'react-native'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import { Layout } from '../components/Layout'

it('renders the layout', () => {
  renderer.create(
    <Layout>
      <Text>Test</Text>
    </Layout>,
  )
})
