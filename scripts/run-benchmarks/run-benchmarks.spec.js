import { ms } from 'string-fn'

import { runAllBenchmarks, runSingleBenchmark } from './run-benchmarks'

jest.setTimeout(ms('15 minutes'))

test('happy', async () => {
  // await runAllBenchmarks()
  await runSingleBenchmark('update')
})
