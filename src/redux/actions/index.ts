import { SET_DATA, SET_ERROR, SET_LOADING, ADD_TO_GRAPH, SORT_DATA, SET_SORT, EMPTY_GRAPH, REMOVE_FROM_GRAPH } from '../constants/actionTypes'

import { DataSampleInterface } from '../../interfaces'

/**
 *  @param {DataSampleInterface[]} payload - The array of data samples retrieved from the API.
 */
export const setData = (payload: DataSampleInterface[]) => ({ type: SET_DATA, payload })

/**
 *  @param {DataSampleInterface} payload - A singular data entry, to be plotted to the graph.
 */
export const addData = (payload: DataSampleInterface) => ({ type: ADD_TO_GRAPH, payload })

/**
 *  @param {string} payload - The name of a data sample that is present on the graph and is to be removed.
 */
export const removeData = (payload: string) => ({ type: REMOVE_FROM_GRAPH, payload })

/**
 *  @param {string} payload - A string from the sortBy property to trigger the sorting of data.
 */
export const sortData = (payload: string) => ({ type: SORT_DATA, payload })

/**
 *  @param {null[]} payload - An empty array, to empty the data subset fo graph plotting.
 */
export const setGraph = (payload: null[]) => ({ type: EMPTY_GRAPH, payload })

/**
 *  @param {boolean} payload - If true, sets loads the spinner. Likely just for API calls.
 */
export const setLoading = (payload: boolean) => ({ type: SET_LOADING, payload })

/**
 *  @param {boolean} payload - If there was an error retrieving data from the API. Loads error component.
 */
export const setError = (payload: boolean) => ({ type: SET_ERROR, payload })

/**
 *  @param {string} payload - Used for setting "sortBy". Can be either: "stringASC", "stringDESC", "numberASC", or"numberDESC".
 */
export const setSort = (payload: string) => ({ type: SET_SORT, payload })
