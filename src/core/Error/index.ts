import BaseError from './BaseError'
export class JsError extends BaseError {
  constructor(props: string) {
    super(props)
  }
}

export class PromiseError extends BaseError {
  constructor(props: string) {
    super(props)
  }
}

export class staticError extends BaseError {
  constructor(props: string) {
    super(props)
  }
}
