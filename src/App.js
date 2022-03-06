import React from 'react';
import './App.css';
import MaterialTable from 'material-table'

import PrintIcon from '@material-ui/icons/Print'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const studentData = [
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000,
  },
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000,
  },
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000,
  },
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000,
  },
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000,
  },
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000,
  },
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000,
  },
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000,
  },
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000,
  },
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000,
  },
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000,
  },
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000,
  },
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000,
  },
  {
    id: 2,
    name: "Vikas",
    email: "vikas@gmail.com",
    year: 2013,
    fee: 785462,
  },

  {
    id: 3,
    name: "Rahul",
    email: "rahul@gmail.com",
    year: 2020,
    fee: 784596,
  }
]
function App() {
  const columns = [
    { title: "Name", field: "name", },
    { title: "Email", field: "email", },
    { title: "Year", field: "year", type: "numeric" },
    { title: "Fee", field: 'fee', type: "currency" }]
  const downloadPdf = () => {
    const doc = new jsPDF()
    doc.text("Student Details", 20, 10)
    doc.autoTable({
      theme: "grid",
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body: studentData
    })
    doc.save('table.pdf')
  }

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Export Data to Pdf in Material Table</h4>
      <MaterialTable
        title="Student Details"
        columns={columns}
        data={studentData}
        actions={[
          {
            icon: () => <PrintIcon />,
            tooltip: "Export to Pdf",
            onClick: () => downloadPdf(),
            isFreeAction: true
          }
        ]}
      />
    </div>
  );
}

export default App;
