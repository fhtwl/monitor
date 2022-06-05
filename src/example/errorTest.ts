export function testJs() {
  throw new Error('test-js')
}

export function testPromise() {
  return new Promise((resolve, reject) => {
    reject({
      data: 'dasd',
      message: 'sda',
    })
  })
}
