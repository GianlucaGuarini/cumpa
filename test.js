import compose, { composeRight } from './index.next.js'
import assert from 'node:assert'

describe('cumpa', () => {
  const add2 = x => x + 2
  const multiplyBy3 = x => x * 3

  it('can compose', () => {
    const add2AndMultiplyBy3 = compose(multiplyBy3, add2)

    assert.equal(add2AndMultiplyBy3(1), 9)
  })

  it('can compose right', () => {
    const multiplyBy3AndAdd2 = composeRight(multiplyBy3, add2)

    assert.equal(multiplyBy3AndAdd2(1), 5)
  })
})
