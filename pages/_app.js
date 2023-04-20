import '@/styles/globals.css'
import TransitionLayout from './TransitionLayout'

export default function App({ Component, pageProps }) {
  return (
    <TransitionLayout>
      <Component {...pageProps} /> 
    </TransitionLayout>
  )
}
