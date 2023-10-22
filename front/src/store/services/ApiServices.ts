import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {baseUrl, brandURLPref, carURLPref, engineURLPref} from "../../http/urls";
import {ICarResponse, ICarsResponse} from "../../models/storeModels";
import {Brand, Engine} from "../../models/DataBaseModels";

export const carApi = createApi({
    reducerPath: 'car/api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    endpoints: (build) => ({
        fetchAllCars: build.query<ICarsResponse, string>({
            query: (params) => ({
                url: `${carURLPref}${params && "?" + params}`,
            })
        }),
        fetchCar: build.query<ICarResponse, string>({
            query: (id) => ({
                url: `${carURLPref}/${id}`,
            })
        }),
        fetchAllBrends: build.query<Brand[], string>({
            query: () => ({
                url: `${brandURLPref}`,
            })
        }),
        fetchAllEngines: build.query<Engine[], string>({
            query: () => ({
                url: `${engineURLPref}`,
            })
        })
    })
})