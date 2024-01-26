import React from 'react';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import { SummaryStats, getSummaryStats } from '@/app/lib/api';

export interface PageProps {}

const labelByStat: Record<keyof SummaryStats, string> = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

export default async function Page({}: PageProps) {
  //   const data = await getSummaryStats();

  return (
    <div className="grid grid-cols-12 gap-5">
      {/* {(Object.keys(labelByStat) as (keyof SummaryStats)[]).map((key) => (
        <div key={key} className="col-span-3">
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStat[key]}
            counter={data[key]}
          />
        </div>
      ))} */}
    </div>
  );
}
