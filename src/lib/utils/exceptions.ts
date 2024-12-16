import { HTTPErrorCode } from '../types/response.schema';

export class ServerError extends Error {
  status: HTTPErrorCode;
  constructor(status: HTTPErrorCode, message: string) {
    super(message);
    this.status = status;
  }
}
