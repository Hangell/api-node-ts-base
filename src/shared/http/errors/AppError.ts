class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  /**
   * AppError para utilizar com midleare e evitar uso do tyr catch
   */
  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
