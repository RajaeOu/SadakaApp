import React from 'react'
import DashboardStatsGrid from '../../components/Journal/DashboardStatsGrid'
import TransactionChart from '../../components/Journal/TransactionChart'
import RecentOrders from '../../components/Journal/RecentOrders'
import BuyerProfilePieChart from '../../components/Journal/BuyerProfilePieChart'
import PopularProducts from '../../components/Journal/PopularProducts'

export default function Journal() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<BuyerProfilePieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				{/*<RecentOrders />
				<PopularProducts />*/}
			</div>
		</div>
	)
}