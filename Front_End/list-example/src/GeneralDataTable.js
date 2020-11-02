import React from 'react';
import { forwardRef } from 'react';
import Grid from '@material-ui/core/Grid'

import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Alert from '@material-ui/lab/Alert';

// boilerplate code from the documentation
// https://material-table.com/#/docs/get-started
// and https://levelup.gitconnected.com/react-material-table-crud-operations-with-restful-api-data-ca1af738d3c5

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function GeneralDataTable(props) {
  return (
    <div className="App" style={{marginTop: "2%"}}>
      <Grid container spacing={1}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
          <div>
            {props.iserror &&
              <Alert severity="error">
                  {props.errorMessages.map((msg, i) => {
                      return <div key={i}>{msg}</div>
                  })}
              </Alert>
            }
          </div>
            <MaterialTable style={{ border: "2px solid black" }}
              title= {props.title}
              columns={props.col.map((c) => ({...c, tableData: undefined}))}
              data={props.data}
              icons={tableIcons}
              localization={{
                body: {
                    emptyDataSourceMessage: ''
                }
              }}
              editable={props.editable ? {
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                    props.handleRowUpdate(newData, oldData, resolve);
                  }),
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    props.handleRowAdd(newData, resolve)
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    props.handleRowDelete(oldData, resolve)
                  }),
              } : {}}
              options={{
                headerStyle: {
                  backgroundColor: '#ADD8E6'
                },
                searchFieldStyle: {
                  border: "1px solid black",
                  padding: "0px 0px 0px 10px"
                },
                pageSize: 10,
                pageSizeOptions: [10, 15, 20, 25],
                addRowPosition: "first"
              }}

            />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
    </div>
  );
}