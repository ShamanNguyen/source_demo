// helper functions
import Constants from '../constants'

export const setValue = (x, y) => {
  if (Constants.HEIGHT_SCREEN > Constants.HEIGHT_IPHONE_5) {
    return x
  }

  return y
}