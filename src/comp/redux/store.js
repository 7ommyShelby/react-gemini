import { configureStore } from '@reduxjs/toolkit'
import funreducer from '../redux/slice'

export const store = configureStore({
    reducer : funreducer,
}
)