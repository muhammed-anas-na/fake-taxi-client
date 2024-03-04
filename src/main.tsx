import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './main.css'
import { Provider } from 'react-redux'
import store , {persistor} from './utils/Redux/Store/store.tsx'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  {
    console.log(import.meta.env.VITE_ENVIRONMENT)
  }
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
      <App />
      </ThemeProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
)
