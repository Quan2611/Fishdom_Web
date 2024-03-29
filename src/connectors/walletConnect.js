import { initializeConnector } from '@web3-react/core'
import { WalletConnect } from '@web3-react/walletconnect'
import { URLS } from '../chans'

console.log('URLSURLS: ', URLS)
export const [walletConnect, hooks] = initializeConnector(
    (actions) =>
        new WalletConnect(actions, {
            rpc: URLS,
        }),
    Object.keys(URLS).map((chainId) => Number(chainId))
)