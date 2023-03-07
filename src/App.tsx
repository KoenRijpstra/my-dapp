import { useEvmWalletTokenBalances } from '@moralisweb3/react'

const App = () => {
  const { data: balance, error, fetch, isFetching } = useEvmWalletTokenBalances({ address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045' })

  if (isFetching) return <div>Fetching/Refreshing balance…</div>
  if (error) return <div>Error {JSON.stringify(error, null, 2)}</div>
  return (
    <>
      <button onClick={()=> fetch()}>Refetch Balance</button>
      <div>{JSON.stringify(balance, null, 2)}</div>
    </>
  )
}

export default App;