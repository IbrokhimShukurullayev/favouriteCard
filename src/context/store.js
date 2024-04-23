import { configureStore } from '@reduxjs/toolkit'
import   wishlistSlice  from './wishestSlice'

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice
  },
})  