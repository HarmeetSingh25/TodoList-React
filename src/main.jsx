import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import App from './App.jsx'
import "./style.css"
import Wrapper from './Wrapper.jsx';
createRoot(document.getElementById('root')).render(
    <Wrapper>
        <ToastContainer />
        <App  />
    </Wrapper>
)
