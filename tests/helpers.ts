beforeAll(async done => {
  try {
    done()
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    process.stderr.write(`${err}\n${err.stack}\n`)
    process.exit(1)
  }
}, 60000)

afterAll(async done => {
  done()
})
