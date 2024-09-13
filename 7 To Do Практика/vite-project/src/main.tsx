import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from '../node_modules/react-redux/dist/react-redux'
import App from './App'
import './index.css'
import { store } from './store/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
      
  </StrictMode>,
)
