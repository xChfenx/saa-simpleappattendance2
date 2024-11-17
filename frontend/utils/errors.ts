export class QRCodeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Invalid QR Code";
    Object.setPrototypeOf(this, QRCodeError.prototype);
  }
}

export class EmptyQRCodeError extends QRCodeError {
  constructor(message: string) {
    super(message);
    this.name = "Empty QR Code";
    Object.setPrototypeOf(this, EmptyQRCodeError.prototype);
  }
}

export class RUTError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Invalid RUT";
    Object.setPrototypeOf(this, RUTError.prototype);
  }
}

export class NoCommonFormatRUTError extends RUTError {
  constructor(message: string) {
    super(message);
    this.name = "No common format";
    Object.setPrototypeOf(this, NoCommonFormatRUTError.prototype);
  }
}

export class NoRUTError extends RUTError {
  constructor(message: string) {
    super(message);
    this.name = "Non existing RUT";
    Object.setPrototypeOf(this, NoRUTError.prototype);
  }
}

export class EmptyRUTError extends RUTError {
  constructor(message: string) {
    super(message);
    this.name = "RUT is empty";
    Object.setPrototypeOf(this, EmptyRUTError.prototype);
  }
}


