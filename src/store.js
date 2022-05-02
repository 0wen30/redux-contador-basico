import { configureStore } from '@reduxjs/toolkit'
import contadorConReducer from './contador.slice'

export default configureStore({
    reducer: {
        contador: contadorConReducer,
    },
})