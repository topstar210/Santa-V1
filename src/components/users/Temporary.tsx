import { LinearProgress, Stack, Typography } from '@mui/material';
import { DataGrid, GridApi, GridColDef, GridSlots, useGridApiRef } from '@mui/x-data-grid';
import { ChangeEvent, useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';

import CustomDataGridFooter from 'components/common/table/CustomDataGridFooter';
import CustomDataGridHeader from 'components/common/table/CustomDataGridHeader';
import CustomDataGridNoRows from 'components/common/table/CustomDataGridNoRows';

import { tableRowData, TableData } from 'data/users/temporary';
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
    field: 'registeredDate',
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
    field: 'temporaryCode',
    renderCell: (params) => {
      return <Typography sx={{ fontWeight: 500 }}>{params.value}</Typography>;
    },
    headerName: 'Temporary code',
    width: 100,
    align: 'center',
  },
];

const TemporaryTable = () => {
  const [searchText, setSearchText] = useState('');
  const apiRef = useGridApiRef<GridApi>();

  useEffect(() => {
    apiRef.current.setRows(TableData);
  }, [apiRef]);

  useEffect(() => {
    apiRef.current.setQuickFilterValues([searchText]);
  }, [searchText, apiRef]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    setSearchText(searchValue);
    if (searchValue === '') {
      apiRef.current.setRows(TableData);
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
            pagination: { labelRowsPerPage: TableData.length },
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
