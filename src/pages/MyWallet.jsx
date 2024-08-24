import { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import TopUpModal from '../components/modals/TopUpModal'
import WithdrawModal from '../components/modals/WithdrawModal'
import Transactions from '../components/my-wallet/Transactions'
import { getMyWalletApi } from '../shared/apis/userApi'
import { MULTIPLIED_AMOUNT } from '../shared/constants'
import { currencyFormat } from '../shared/utils'

export default function MyWallet() {
  const [wallet, setWallet] = useState(0)
  const [showWD, setShowWD] = useState(false)
  const [showTU, setShowTU] = useState(false)

  useEffect(() => {
    getMyWalletApi().then((data) => {
      const resData = data?.data
      setWallet(resData?.wallet ?? 0)
    })
  }, [])

  return (
    <>
      <BreadCrumb
        links={[
          {
            path: '/',
            name: 'Home'
          },
          {
            name: 'My Wallet'
          }
        ]}
      />
      <div className="container">
        <h1 className="mb-4">My Wallet</h1>
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-md-6 mb-3 d-flex order-md-2">
            <button
              className="btn btn-danger ms-md-auto me-2"
              onClick={() => setShowWD(true)}
            >
              Withdraw
            </button>
            <button className="btn btn-success" onClick={() => setShowTU(true)}>
              Top-up
            </button>
          </div>
          <p className="col-md-6 mb-3 fw-bold order-md-1">
            Your current balance:
          </p>
        </div>
        <div className="row current-balance mb-3">
          <div className="col-12 fs-2 text-success">
            {currencyFormat(wallet * MULTIPLIED_AMOUNT, 'VND', false)} VND
          </div>
        </div>
        <Transactions />
      </div>
      <WithdrawModal
        currentBalance={wallet}
        show={showWD}
        onClose={() => setShowWD(false)}
      />
      <TopUpModal
        currentBalance={wallet}
        show={showTU}
        onClose={() => setShowTU(false)}
      />
    </>
  )
}
