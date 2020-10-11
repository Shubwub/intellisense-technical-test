import axios from 'axios';

const instance = axios.create({
  baseURL: "https://reference.intellisense.io/thickenernn/v1/referencia"
});

export const getData = async () => {
  try {
    const { data: { current: { data } } } = await instance.get(`/`);
    const pt2 = data["pt2-scaled"];
    const samples = []
    for (let key in pt2) {
      if (/^RD:647/.test(key)) samples.push({ name: key, times: pt2[key].times, values: pt2[key].values })
    }
    // eslint-disable-next-line no-throw-literal
    if (pt2.status) throw 'API ERROR';
    return samples;
  } catch (e) {
    throw e;
  }
}