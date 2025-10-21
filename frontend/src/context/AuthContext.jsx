import React, { createContext } from 'react'

// Export context
export const authDataContext = createContext()

// Provider component
function AuthContext({ children }) {
  let serverUrl = "http://localhost:8000"

  let value = {
    serverUrl
  }

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  )
}

export default AuthContext
