import axios from 'axios';
import { DataSampleInterface } from '../interfaces'

/**
 *  A custom axios instance, ideally would have extra options like a
 *  timeout and headers, however it was felt these would not be
 *  needed for such a simple request. a baseURL is provided so it can
 *  easily be swapped out and would not need to be referenced in every
 *  future axios call.
 */
const instance = axios.create({
  baseURL: "https://reference.intellisense.io/thickenernn/v1/referencia"
});

/**
 *  @param {number} ms - The number of milliseconds to pause execution
 * 
 *  This function is just to add an artificial delay to retreiving API
 *  data. Would likely be removed in a production environment, but
 *  given the small payload, allows time to show the loading spinner.
 */
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

/**
 *  An API call to fetch the needed data. Once all records have been
 *  retrieved, filters out all those that aren't needed using a simple
 *  regex.
 * 
 *  Occasionally the API will return a 500 status and no data. Under
 *  this circumstance this function will throw an error, triggering the
 *  error state and component.
 */
export const getData = async () => {
  try {
    const { data: { current: { data } } } = await instance.get(`/`);
    const pt2 = data["pt2-scaled"];
    const samples: DataSampleInterface[] = []
    for (let key in pt2) {
      if (/^RD:647/.test(key)) samples.push({ name: key, times: pt2[key].times, values: pt2[key].values })
    }
    await delay(1000)
    // eslint-disable-next-line no-throw-literal
    if (pt2.status) throw 'API ERROR';
    return samples;
  } catch (e) {
    throw e;
  }
}