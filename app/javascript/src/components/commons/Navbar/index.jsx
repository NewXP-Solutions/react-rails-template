import React from 'react'
import { Bell, Search, Menu } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Menu className="mr-2 md:hidden" />
        <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-xl font-bold hidden md:block">NPL Remittance</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <Bell className="text-gray-600" />
        <img src="/placeholder.svg?height=32&width=32" alt="User" className="h-8 w-8 rounded-full" />
      </div>
    </nav>
  )
}