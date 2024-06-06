import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import orderServices from 'services/ordersService';


interface PatientDetails {
    age: number;
    bill_date: string;
    bill_no: string;
    gender: boolean;
    patient_name: string;
  }
  
  interface Result {
    attachment: string;
    id: number;
    line_id: number;
  }
  
  interface Order {
    bill_date: string;
    bill_no: string;
    date: string;
    doctor: string;
    eta: string;
    has_result: boolean;
    hospital_id: string;
    is_eta_crossed: boolean;
    lab: string;
    order_id: number;
    order_ref: string;
    orderline_id: number;
    patient_details: PatientDetails;
    patient_name: string;
    result: Result[];
    status: string;
    test_name: string;
  }


interface IState {
    loading: boolean;
    orders: Order[];
    orderTableParams: any;
}

export const initialState: IState = {
  loading: false,
  orders: [],
  orderTableParams: {
    pagination: {
      current: 1,
      pageSize: 5,
    },
  },
}

// Get Orders Async Call
export const getOrders = createAsyncThunk(
  'orders/getAllOrders',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const data = await orderServices.getOrders()
      return data
    } catch (err: any) {
      return rejectWithValue(err.message || 'Error')
    }
  }
)


export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.loading = true
    },
    setorderTableParams: (state, action) => {
      state.orderTableParams = action.payload
    },
    setOrders: (state, action) => {
      state.orders = action.payload
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state: IState) => {
        state.loading = true
      })
      .addCase(getOrders.fulfilled, (state: IState, action:any) => {
        state.loading = false
        state.orders = action.payload.data;
      })
      .addCase(getOrders.rejected, (state:IState, action) => {
        state.loading = false
        console.log(action.payload)
      })
  },
})

export const {
    showLoading,
    setorderTableParams,
    setOrders,
} = ordersSlice.actions

export default ordersSlice.reducer
