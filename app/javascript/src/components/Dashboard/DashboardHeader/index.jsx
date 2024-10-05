
import React from 'react'

export default function DashboardHeader({ props }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl md:text-2xl font-bold">Welcome back, John!</h2>
      <p className="text-sm md:text-base text-gray-600">Here's what's happening with your account today.</p>
    </div>
  )
}