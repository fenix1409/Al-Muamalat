"use client"
import { ContextType } from "@/types/Context";
import React, { createContext, ReactNode, useState, useEffect } from "react";

export const Context = createContext<ContextType>({
    showCategory: false,
    setShowCategory: () => null,
    token: "",
    setToken: () => null
})

export const GlobalContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [showCategory, setShowCategory] = useState<boolean>(false)
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        const data = localStorage.getItem("token")
        if (data) setToken(JSON.parse(data))
    }, [])

    useEffect(() => {
        if (token !== null) {
            localStorage.setItem("token", JSON.stringify(token))
        }
    }, [token])

    return <Context.Provider value={{ showCategory, setShowCategory, setToken, token }}>{children}</Context.Provider>
}