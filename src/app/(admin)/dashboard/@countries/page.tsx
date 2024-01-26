import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import DashboardCard from '@/app/components/dashboard-card';
import { getCompanies, getCountries } from '@/app/lib/api';
import getCountById from '@/app/lib/utils/getCountById';

export interface PageProps {}

export default async function Page({}: PageProps) {
  return (
    <DashboardCard label="Countries of companies">
      <div className="flex items-end pb-5 px-5 gap-2">
        <div></div>
        <Image width={395} height={262} src="/images/world.svg" alt="world" />
      </div>
    </DashboardCard>
  );
}
