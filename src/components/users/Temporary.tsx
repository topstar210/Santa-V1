import { LinearProgress, Stack, Typography } from '@mui/material';
import { DataGrid, GridApi, GridColDef, GridSlots, useGridApiRef } from '@mui/x-data-grid';
import { ChangeEvent, useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';
import { fetchData } from 'services/apiService';

import CustomDataGridFooter from 'components/common/table/CustomDataGridFooter';
import CustomDataGridHeader from 'components/common/table/CustomDataGridHeader';
import CustomDataGridNoRows from 'components/common/table/CustomDataGridNoRows';

import { tableRowData } from 'data/users/temporary';
import dayjs from 'dayjs';

export const tableColumns: GridColDef<tableRowData>[] = [
  {
    field: 'name',
    renderCell: (params) => {
      return <Typography sx={{ fontWeight: 500 }}>{params.value}</Typography>;
    },
    headerName: 'Name',
    width: 100,
  },
  {
    field: 'created_at',
    headerName: 'Registered Date',
    width: 100,
    valueFormatter: (params) => dayjs(params).format('DD.MM.YYYY'),
    sortComparator: (v1, v2) => dayjs(v1).unix() - dayjs(v2).unix(),
  },
  {
    field: 'expiredDate',
    headerName: 'Expired Date',
    width: 100,
    valueFormatter: (params) => dayjs(params).format('DD.MM.YYYY'),
    sortComparator: (v1, v2) => dayjs(v1).unix() - dayjs(v2).unix(),
  },
  {
    field: 'login_code',
    renderCell: (params) => {
      return <Typography sx={{ fontWeight: 500 }}>{params.value}</Typography>;
    },
    headerName: 'Temporary code',
    width: 100,
    align: 'center',
  },
];

const TemporaryTable = () => {
  const [tableData, setTableData] = useState<tableRowData[]>([]);

  const [searchText, setSearchText] = useState('');
  const apiRef = useGridApiRef<GridApi>();

  useEffect(() => {
    const getData = async () => {
      const { data, status } = await fetchData(`/users?is_temp=1`);
      if (status) {
        setTableData(data);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    apiRef.current.setRows(tableData);
  }, [apiRef, tableData]);

  useEffect(() => {
    apiRef.current.setQuickFilterValues([searchText]);
  }, [searchText, apiRef]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    setSearchText(searchValue);
    if (searchValue === '') {
      apiRef.current.setRows(tableData);
    }
  };

  return (
    <Stack
      sx={{
        overflow: 'auto',
        position: 'relative',
        height: { xs: 'auto', sm: 1 },
        width: 1,
      }}
    >
      <SimpleBar>
        <DataGrid
          autoHeight={false}
          rowHeight={52}
          columns={tableColumns}
          loading={false}
          apiRef={apiRef}
          onResize={() => {
            apiRef.current.autosizeColumns({
              includeOutliers: true,
              expand: true,
            });
          }}
          hideFooterSelectedRowCount
          disableColumnResize
          disableColumnMenu
          disableColumnSelector
          disableRowSelectionOnClick
          rowSelection={false}
          slots={{
            loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
            pagination: CustomDataGridFooter,
            toolbar: CustomDataGridHeader,
            noResultsOverlay: CustomDataGridNoRows,
          }}
          slotProps={{
            toolbar: {
              title: 'Temporary Users',
              flag: 'user',
              value: searchText,
              onChange: handleChange,
              clearSearch: () => setSearchText(''),
            },
            pagination: { labelRowsPerPage: tableData.length },
          }}
          initialState={{ pagination: { paginationModel: { page: 1, pageSize: 5 } } }}
          pageSizeOptions={[5, 10, 25]}
          sx={{
            boxShadow: 1,
            px: 3,
            borderColor: 'active.selected',
            height: 1,
            width: 1,
            tableLayout: 'fixed',
          }}
        />
      </SimpleBar>
    </Stack>
  );
};

export default TemporaryTable;
