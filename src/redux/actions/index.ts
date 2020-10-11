import { GET_DATA, SET_ERROR, SET_LOADING, ADD_TO_GRAPH, SORT_DATA, SET_SORT, EMPTY_GRAPH, REMOVE_FROM_GRAPH } from '../constants/actionTypes'

import { DataSampleInterface } from '../../interfaces'

export const getData = (payload: DataSampleInterface[]) => ({ type: GET_DATA, payload })

export const addData = (payload: DataSampleInterface) => ({ type: ADD_TO_GRAPH, payload })

export const removeData = (payload: string) => ({ type: REMOVE_FROM_GRAPH, payload })

export const sortData = (payload: string) => ({ type: SORT_DATA, payload })

export const setGraph = (payload: null[]) => ({ type: EMPTY_GRAPH, payload })

export const setLoading = (payload: boolean) => ({ type: SET_LOADING, payload })

export const setError = (payload: boolean) => ({ type: SET_ERROR, payload })

export const setSort = (payload: string) => ({ type: SET_SORT, payload })
