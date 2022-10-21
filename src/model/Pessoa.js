import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  DataGrid,
  GridToolbar,
  //GridToolbarContainer,
  //GridToolbarFilterButton,
  GridLinkOperator
} from '@mui/x-data-grid'

//const Contexto = CreateContext()
//const URI = 'https://reqres.in/api/users?'
const URI = 'https://www.balldontlie.io/api/v1/teams'

export const Contexto = React.createContext()

const Pessoa = () => {
  const [data, setData] = useState([])

  const getPessoa = async () => {
    await axios.get(URI).then((res) => {
      setData(res.data.data)
    })
  }

  useEffect(() => {
    getPessoa()
  }, [])

  //console.log(JSON.stringify(data))
  return (
    <Contexto.Provider value={ [data] }>
      <Datagrid1 />
    </Contexto.Provider>
  )
}



//DATA GRID 1:
const columns = [
  { field: 'id', headerName: 'ID', type: 'number', width: '20' },
  { field: 'abbreviation', headerName: 'Abbrev.', width: 65},
  { field: 'city', headerName: 'City', flex: 1},
  { field: 'conference', headerName: 'Conference', flex: 1 },
  { field: 'division', headerName: 'Division', flex: 1 },
  { field: 'full_name', headerName: 'Full Name', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },
]
const Datagrid1 = () => {
  const [data] = React.useContext(Contexto);
  //let json = JSON.stringify(data)
  //console.log(JSON.stringify(data))
  return (
    <div style={{ height: 500, width: '100%' }}>
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={12}
      //disableColumnFilter
      disableColumnSelector
      //disableDensitySelector
      components={{ Toolbar: GridToolbar }}
      componentsProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 500 },
        },
        filterPanel: {
          // Force usage of "And" operator
          linkOperators: [GridLinkOperator.And],
          // Display columns by ascending alphabetical order
          columnsSort: 'asc',
          filterFormProps: {
            // Customize inputs by passing props
            linkOperatorInputProps: {
              variant: 'outlined',
              size: 'small',
            },
            columnInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            operatorInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: 'outlined',
                size: 'small',
              },
            },
            deleteIconProps: {
              sx: {
                '& .MuiSvgIcon-root': { color: '#d32f2f' },
              },
            },
          },
          sx: {
            // Customize inputs using css selectors
            '& .MuiDataGrid-filterForm': { p: 2 },
            '& .MuiDataGrid-filterForm:nth-child(even)': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#444' : '#f5f5f5',
            },
            '& .MuiDataGrid-filterFormLinkOperatorInput': { mr: 2 },
            '& .MuiDataGrid-filterFormColumnInput': { mr: 2, width: 150 },
            '& .MuiDataGrid-filterFormOperatorInput': { mr: 2 },
            '& .MuiDataGrid-filterFormValueInput': { width: 200 },
          },
        },
      }}
      //initialState={initialState}
    />
  </div>
  )
}


export default Pessoa
