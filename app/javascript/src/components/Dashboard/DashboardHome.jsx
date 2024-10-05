import React from 'react'
import Navbar from "components/commons/Navbar"
import Sidebar from "components/commons/Sidebar"
import DashboardHeader from './DashboardHeader'
// import WelcomeSection from "./welcome-section"
// import BalanceCards from "./balance-cards"
// import OverviewChart from "./overview-chart"
// import TransactionSummary from "./transaction-summary"
// import RecentTransactions from "./recent-transactions"

export default function DashboardHome() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1 relative">

        <main className="flex-1 p-4 md:p-6 mb-16 md:mb-0">
          <DashboardHeader />
        </main>
      </div>
    </div>
  )
}