import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

// the expected response from the API
const fakePokemon = {
  name: "Fakichu"
}

// mock (simulate) the http response
const mockResponse = (status, statusText, response) => {
  return new Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      "Content-type": "application/json"
    }
  })
}

// a fake promise that returns the fake response
const fakePromise = Promise.resolve(
  mockResponse(200, null, JSON.stringify({ fakePokemon }))
)

// replace the fetch from the browser by our fake implementation
window.fetch = jest.fn().mockImplementationOnce(() => {
  return fakePromise
})

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
