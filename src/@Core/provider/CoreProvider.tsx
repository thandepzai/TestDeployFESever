'use client'
import React, { ReactNode, createContext } from 'react'

export const CoreContext = createContext<any>(null)

export const CoreProvider: React.FC<any> = ({ children, ...restProps }) => {
	return <CoreContext.Provider value={{...restProps}}>{children}</CoreContext.Provider>
}
