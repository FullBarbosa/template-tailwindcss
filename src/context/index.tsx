'use client'
import React from 'react'

const Context = React.createContext(
  {} as {
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>
  }
)

export const ClientProvider = ({ children }: React.PropsWithChildren) => {
  const [state, setState] = React.useState<string>('')
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  )
}

export const useClient = () => React.useContext(Context)
