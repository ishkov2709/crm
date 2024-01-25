import AddCompanyButton from '../../components/add-company-button';
import CompanyRow from '../../components/company-row';
import CompanyTable from '../../components/company-table';
import Header from '../../components/header';
import SearchInput from '../../components/search-input';
import Toolbar from '../../components/toolbar';
import { CompanyStatus } from '../../lib/api';

export interface PageProps {}

export default function Page() {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          company={{
            id: '1',
            categoryTitle: 'Products',
            title: 'Costco',
            status: CompanyStatus.Pending,
            hasPromotions: true,
            countryTitle: 'USA',
            joinedDate: '02.19.2023',
          }}
        />
      </CompanyTable>
    </>
  );
}
