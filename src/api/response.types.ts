export interface ApiResponse<P> {
  message: string;
  messageLBL?: any;
  payload: P;
  requestId: string;
  result: boolean;
}
