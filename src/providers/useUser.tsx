import { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { fetchData } from 'services/apiService';

import { tableRowData } from 'data/users/registered';

interface UserContextType {
  tableData: tableRowData[];
  handleReload: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [tableData, setTableData] = useState<tableRowData[]>([]);

  const getData = async () => {
    const { data, status } = await fetchData(`/users?is_temp=0`);
    if (status) {
      setTableData(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleReload = () => {
    getData();
  };

  return (
    <UserContext.Provider value={{ tableData, handleReload }}>{children}</UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within an UserProvider');
  }
  return context;
};
