import React from 'react'
import ErrorTester from './ErrorTester'
import { ErrorBoundary } from "./ErrorBoundary";

function TestErr () {
  return (
    <ErrorBoundary>
          <h1>Hello</h1>
          <ErrorTester/>
    </ErrorBoundary>
  )
}

export default TestErr