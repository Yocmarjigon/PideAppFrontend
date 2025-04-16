export interface ResponseAPI {
  message: string;
  status: string;
  code: string;
}

export interface ResponseAPIWithToken extends ResponseAPI {
  token: string;
}
