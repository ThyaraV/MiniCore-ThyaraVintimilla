import { PROGRESO_URL,UPLOAD_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";
//lógica de interacción con APIs
export const progresosApiSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProgresos: builder.query({
            query: () =>({
                url: PROGRESO_URL,
            }),
            providesTags: ['Progreso'],
            keepUnusedDataFor: 5
        }),
    }),
});

export const {useGetProgresosQuery}=progresosApiSlice;