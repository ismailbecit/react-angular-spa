import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
export default function Root(props) {
  const [text, setText] = useState("")

  return (
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  )
}
