import { SET_DATA, ADD_TO_GRAPH, SORT_DATA, EMPTY_GRAPH, REMOVE_FROM_GRAPH } from '../constants/actionTypes';
import { DataState, DataSampleInterface } from '../../interfaces'

const INITIAL_STATE: DataState = {
  table: [],
  graph: []
};

const reducer = (state = INITIAL_STATE, action: any): DataState => {
  switch (action.type) {

    /**
     *  Stores retrieved data from API to data array.
     */
    case SET_DATA:
      return {
        ...state, table: action.payload,
      };

    /**
     *  A switch for sorting the data in the redux store.
     */
    case SORT_DATA:
      switch (action.payload) {

        /**
         *  Sorts the table alphabetically in descending order.
         */
        case 'stringDESC':
          return {
            ...state, table: [...state.table].sort((a: DataSampleInterface, b: DataSampleInterface): number => {
              const aName = a.name.toUpperCase();
              const bName = b.name.toUpperCase();
              if (aName < bName) {
                return -1;
              }
              return 1;
            })
          }

        /**
         *  Sorts the table alphabetically in ascending order.
         */
        case 'stringASC':
          return {
            ...state, table: [...state.table].sort((a: DataSampleInterface, b: DataSampleInterface): number => {
              const aName = a.name.toUpperCase();
              const bName = b.name.toUpperCase();
              if (aName > bName) {
                return -1;
              }
              return 1;
            })
          }

        /**
         *  Sorts the table numerically in descending order.
         */
        case 'numberDESC':
          return {
            ...state, table: [...state.table].sort(
              (a: DataSampleInterface, b: DataSampleInterface): number =>
                b.values[b.values.length - 1] -
                a.values[a.values.length - 1]
            )
          }

        /**
         *  Sorts the table numerically in ascending order.
         */
        case 'numberASC':
          return {
            ...state, table: [...state.table].sort(
              (a: DataSampleInterface, b: DataSampleInterface): number =>
                a.values[a.values.length - 1] -
                b.values[b.values.length - 1]
            )
          }

        /**
         *  If there is currently no sorting method it will return them
         *  in the order they are loaded from the API
         */
        default: return state;
      }

    /**
     *  Adds a given sample to the graph.
     */
    case ADD_TO_GRAPH:
      return {
        ...state, graph: [...state.graph, action.payload]
      }

    /**
     *  Removes a sample from the graph by name.
     */
    case REMOVE_FROM_GRAPH:
      return {
        ...state, graph: state.graph.filter((data: DataSampleInterface) => data.name !== action.payload)
      }

    /**
     *  Sets the graph data to an empty array.
     */
    case EMPTY_GRAPH:
      return {
        ...state, graph: []
      }
    default: return state;
  }
};

export default reducer;