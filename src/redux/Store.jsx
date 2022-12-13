import {configureStore} from '@reduxjs/toolkit'
import {cartReducer} from './Reducer'

const store = configureStore({
    reducer:{
        first:cartReducer

    }
})

export default store;