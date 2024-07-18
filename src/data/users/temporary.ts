import { uniqueId } from 'lodash';

export interface tableRowData {
  id: string;
  name: string;
  registeredDate: string;
  expiredDate: string;
  temporaryCode: string;
}

export const TableData: tableRowData[] = [
  {
    id: uniqueId(),
    name: 'John Doe',
    registeredDate: '2024-01-04',
    expiredDate: '2024-05-12',
    temporaryCode: 'ABCDEF',
  },
  {
    id: uniqueId(),
    name: 'Jane Smith',
    registeredDate: '2024-02-05',
    expiredDate: '2024-05-12',
    temporaryCode: 'ABCDEF',
  },
  {
    id: uniqueId(),
    name: 'Alice Johnson',
    registeredDate: '2024-03-14',
    expiredDate: '2024-05-12',
    temporaryCode: 'ABCDEF',
  },
  {
    id: uniqueId(),
    name: 'Bob Williams',
    registeredDate: '2024-03-04',
    expiredDate: '2024-05-12',
    temporaryCode: 'ABCDEF',
  },
  {
    id: uniqueId(),
    name: 'Eva Brown',
    registeredDate: '2024-05-30',
    expiredDate: '2024-05-12',
    temporaryCode: 'ABCDEF',
  },
  {
    id: uniqueId(),
    name: 'Michael Davis',
    registeredDate: '2024-05-01',
    expiredDate: '2024-05-12',
    temporaryCode: 'ABCDEF',
  },
  {
    id: uniqueId(),
    name: 'Emily Wilson',
    registeredDate: '2024-04-03',
    expiredDate: '2024-05-12',
    temporaryCode: 'ABCDEF',
  },
  {
    id: uniqueId(),
    name: 'David Taylor',
    registeredDate: '2024-04-13',
    expiredDate: '2024-05-12',
    temporaryCode: 'ABCDEF',
  },
  {
    id: uniqueId(),
    name: 'Olivia Clark',
    registeredDate: '2024-04-23',
    expiredDate: '2024-05-12',
    temporaryCode: 'ABCDEF',
  },
  {
    id: uniqueId(),
    name: 'William Martinez',
    registeredDate: '2024-04-24',
    expiredDate: '2024-05-12',
    temporaryCode: 'ABCDEF',
  },
  {
    id: uniqueId(),
    name: 'Sophia Anderson',
    registeredDate: '2024-04-13',
    expiredDate: '2024-05-12',
    temporaryCode: 'ABCDEF',
  },
  {
    id: uniqueId(),
    name: 'James Thompson',
    registeredDate: '2024-04-01',
    expiredDate: '2024-05-12',
    temporaryCode: 'ABCDEF',
  },
  {
    id: uniqueId(),
    name: 'Emma Garcia',
    registeredDate: '2024-04-08',
    expiredDate: '2024-05-12',
    temporaryCode: 'ABCDEF',
  },
  {
    id: uniqueId(),
    name: 'Alexander Hernandez',
    registeredDate: '2024-04-22',
    expiredDate: '2024-05-12',
    temporaryCode: 'ABCDEF',
  },
  {
    id: uniqueId(),
    name: 'Mia Lopez',
    registeredDate: '2024-04-28',
    expiredDate: '2024-05-12',
    temporaryCode: 'ABCDEF',
  },
];
