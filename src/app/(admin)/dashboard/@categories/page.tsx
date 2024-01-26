import DashboardCard from '@/app/components/dashboard-card';
import React from 'react';

export interface PageProps {}

export default async function Page({}: PageProps) {
  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5"></div>
    </DashboardCard>
  );
}
