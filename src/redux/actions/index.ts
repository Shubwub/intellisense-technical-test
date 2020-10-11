import { GET_DATA, SET_ERROR, SET_LOADING, ADD_TO_GRAPH, SORT_DATA, SET_SORT, EMPTY_GRAPH, REMOVE_FROM_GRAPH } from '../constants/actionTypes'

export const getData = (payload: any) => ({ type: GET_DATA, payload })

export const addData = (payload: any) => ({ type: ADD_TO_GRAPH, payload })

export const removeData = (payload: any) => ({ type: REMOVE_FROM_GRAPH, payload })

export const sortData = (payload: any) => ({ type: SORT_DATA, payload })

export const setGraph = (payload: any) => ({ type: EMPTY_GRAPH, payload })

export const setLoading = (payload: any) => ({ type: SET_LOADING, payload })

export const setError = (payload: any) => ({ type: SET_ERROR, payload })

export const setSort = (payload: any) => ({ type: SET_SORT, payload })
