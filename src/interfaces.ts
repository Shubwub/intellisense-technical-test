export interface DataSampleInterface {
  name: string,
  times: number[],
  values: number[]
}

export interface DataState {
  table: DataSampleInterface[];
  graph: DataSampleInterface[];
}

export interface StatusState {
  loading: boolean;
  error: boolean;
  sortBy: string;
}

export interface TopState {
  data: DataState;
  status: StatusState;
}