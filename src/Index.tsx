import React from 'react'
import { createRoot } from "react-dom/client"
import App from "@components/App/App"
import './Index.module.scss'
import { BrowserRouter } from "react-router-dom"
import "regenerator-runtime/runtime.js"

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)