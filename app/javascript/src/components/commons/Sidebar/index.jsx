import React from 'react'
import { Home, Send, Repeat, CreditCard, Settings, HelpCircle, LogOut } from "lucide-react"

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: "Dashboard" },
    { icon: Send, label: "Send" },
    { icon: Repeat, label: "Exchange" },
    { icon: CreditCard, label: "Cards" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help" },
  ]

  return (
    <aside className="bg-primary text-primary-foreground w-full md:w-64 min-h-screen p-4 fixed md:static bottom-0 left-0 right-0 md:min-h-0">
      <nav className="md:block">
        <ul className="flex md:flex-col justify-around md:justify-start">
          {menuItems.map((item, index) => (
            <li key={index} className="mb-0 md:mb-4">
              <a href="#" className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 p-2 rounded hover:bg-primary-foreground hover:text-primary">
                <item.icon size={20} />
                <span className="text-xs md:text-base">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden md:block mt-auto pt-4 border-t border-primary-foreground">
        <a href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-primary-foreground hover:text-primary">
          <LogOut size={20} />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  )
}