import { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { fetchData } from 'services/apiService';

import { tableRowData } from 'data/users/registered';

interface TempUserContextType {
  tableData: tableRowData[];
  handleReload: () => void;
}

const TempUserContext = createContext<TempUserContextType | undefined>(undefined);

export const TempUserProvider = ({ children }: { children: ReactNode }) => {
  const [tableData, setTableData] = useState<tableRowData[]>([]);

  const getData = async () => {
    const { data, status } = await fetchData(`/users?is_temp=1`);
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
    <TempUserContext.Provider value={{ tableData, handleReload }}>
      {children}
    </TempUserContext.Provider>
  );
};

export const useTempUser = (): TempUserContextType => {
  const context = useContext(TempUserContext);
  if (context === undefined) {
    throw new Error('useTempUser must be used within an TempUserProvider');
  }
  return context;
};
