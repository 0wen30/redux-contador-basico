import { createSlice } from '@reduxjs/toolkit'

export const contador = createSlice({
    name: 'contador',
    initialState: {
        valor: 0,
    },
    reducers: {
        incrementar: (estado) => {
            estado.valor += 1
        },
        decrementar: (estado) => {
            estado.valor -= 1
        },
    },
})

export const { incrementar , decrementar } = contador.actions

export default contador.reducer