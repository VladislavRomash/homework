import React from 'react'
import './index.css'
import App from './p1-main/m1-ui/u1-app/App'
import * as serviceWorker from './serviceWorker'
import {createRoot} from "react-dom/client";

// igg2
const rootElement: any = document.getElementById("root")

const root = createRoot(rootElement)

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
