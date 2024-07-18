import { uniqueId } from 'lodash';

export interface tableRowData {
  id: string;
  name: string;
  email: string;
  registeredDate: string;
  status: 'active' | 'pending';
}

export const TableData: tableRowData[] = [
  {
    id: uniqueId(),
    name: 'John Doe',
    email: 'user1@test.com',
    registeredDate: '2024-01-04',
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Jane Smith',
    email: 'user1@test.com',
    registeredDate: '2024-02-05',
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Alice Johnson',
    email: 'user1@test.com',
    registeredDate: '2024-03-14',
    status: 'active',
  },
  {
    id: uniqueId(),
    name: 'Bob Williams',
    email: 'user1@test.com',
    registeredDate: '2024-03-04',
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Eva Brown',
    email: 'user1@test.com',
    registeredDate: '2024-05-30',
    status: 'active',
  },
  {
    id: uniqueId(),
    name: 'Michael Davis',
    email: 'user1@test.com',
    registeredDate: '2024-05-01',
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Emily Wilson',
    email: 'user1@test.com',
    registeredDate: '2024-04-03',
    status: 'active',
  },
  {
    id: uniqueId(),
    name: 'David Taylor',
    email: 'user1@test.com',
    registeredDate: '2024-04-13',
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Olivia Clark',
    email: 'user1@test.com',
    registeredDate: '2024-04-23',
    status: 'active',
  },
  {
    id: uniqueId(),
    name: 'William Martinez',
    email: 'user1@test.com',
    registeredDate: '2024-04-24',
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Sophia Anderson',
    email: 'user1@test.com',
    registeredDate: '2024-04-13',
    status: 'active',
  },
  {
    id: uniqueId(),
    name: 'James Thompson',
    email: 'user1@test.com',
    registeredDate: '2024-04-01',
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Emma Garcia',
    email: 'user1@test.com',
    registeredDate: '2024-04-08',
    status: 'active',
  },
  {
    id: uniqueId(),
    name: 'Alexander Hernandez',
    email: 'user1@test.com',
    registeredDate: '2024-04-22',
    status: 'pending',
  },
  {
    id: uniqueId(),
    name: 'Mia Lopez',
    email: 'user1@test.com',
    registeredDate: '2024-04-28',
    status: 'active',
  },
];
