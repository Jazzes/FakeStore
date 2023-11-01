import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {
    baseUrl, BasketIdsURLPref, BasketURLPref,
    brandURLPref,
    carURLPref, CompareIdsURLPref, CompareURLPref,
    engineURLPref
} from "../../http/urls";
import {
    BasketCarsId, BasketCarsItems,
    CompareBasketDetails,
    CompareCarsId, CompareCarsItems,
    ICarResponse,
    ICarsResponse
} from "../../models/storeModels";
import {Brand, Engine} from "../../models/DataBaseModels";
import {getCookie} from "../../http/cookies";

export const carApi = createApi({
    reducerPath: 'car',
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
        }),
    })
})

export const shopApi = createApi({
    reducerPath: 'shop',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    tagTypes: ['Compare', 'Basket'],
    endpoints: (build) => ({
        fetchCompareItems: build.query<CompareCarsItems, string>({
            query: () => ({
                url: `${CompareURLPref}`,
                headers: {
                    'Authorization': `Bearer ${getCookie('token')}`
                }
            }),
            providesTags: () => ['Compare']
        }),
        fetchCompareIds: build.query<CompareCarsId, string>({
            query: () => ({
                url: `${CompareIdsURLPref}`,
                headers: {
                    'Authorization': `Bearer ${getCookie('token')}`
                }
            }),
            providesTags: () => ['Compare']
        }),
        addToCompare: build.mutation<CompareBasketDetails, number>({
            query: (id) => ({
                url: `${CompareURLPref}`,
                method: "POST",
                body: {id},
                headers: {
                    'Authorization': `Bearer ${getCookie('token')}`
                }
            }),
            invalidatesTags: ['Compare']
        }),

        fetchBasketItems: build.query<BasketCarsItems, string>({
            query: () => ({
                url: `${BasketURLPref}`,
                headers: {
                    'Authorization': `Bearer ${getCookie('token')}`
                }
            }),
            providesTags: () => ['Basket']
        }),
        fetchBasketIds: build.query<BasketCarsId, string>({
            query: () => ({
                url: `${BasketIdsURLPref}`,
                headers: {
                    'Authorization': `Bearer ${getCookie('token')}`
                }
            }),
            providesTags: () => ['Basket']
        }),
        addToBasket: build.mutation<CompareBasketDetails, number>({
            query: (id) => ({
                url: `${BasketURLPref}`,
                method: "POST",
                body: {id},
                headers: {
                    'Authorization': `Bearer ${getCookie('token')}`
                }
            }),
            invalidatesTags: ['Basket']
        })
    })
})