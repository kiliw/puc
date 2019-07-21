import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  highlight: {
    fontWeight: '700',
  },
  mainTitle: {
    color: Colors.black,
    fontSize: 32,
    fontWeight: '600',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    color: Colors.dark,
    fontSize: 18,
    fontWeight: '400',
    marginTop: 8,
  },
  sectionMainTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: '600',
  },
})
