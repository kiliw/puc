import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fcf2d9',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f7452a',
    borderRadius: 5,
    height: 60,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  buttonIncrease: {
    width: 100,
  },
  buttonText: {
    color: '#fffbf2',
    fontSize: 24,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  footer: {
    color: '#fcf2d9',
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
    color: '#000000',
    fontSize: 32,
    fontWeight: '600',
  },
  safeArea: {
    backgroundColor: '#fcf2d9',
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#fcf2d9',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    color: '#333333',
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
    color: '#000000',
    fontSize: 24,
    fontWeight: '600',
  },
})
