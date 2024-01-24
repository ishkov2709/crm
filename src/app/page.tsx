import { headers } from 'next/headers';
import StatusLabel, { CompanyStatus } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Hello World{new Date().toTimeString()}</h1>
      <StatusLabel disabled={false} status={CompanyStatus.Active}>
        Active
      </StatusLabel>
      <StatusLabel disabled={true} status={CompanyStatus.NotActive}>
        Not Active
      </StatusLabel>
      <StatusLabel disabled={true} status={CompanyStatus.Pending}>
        Pending
      </StatusLabel>
      <StatusLabel disabled={true} status={CompanyStatus.Suspended}>
        Suspended
      </StatusLabel>
    </main>
  );
}
