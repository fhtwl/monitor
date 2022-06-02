export function testJs() {
  throw new Error('这是错误文字')
}

export function testPromise() {
  return new Promise((resolve, reject) => {
    reject('ccccc')
  })
}

export function testStatic() {
  fetch('./aaaa.css')
}
