import React from 'react'
//import React, { useEffect, useState } from 'react'

import {
  CCard, CCardBody, CCardHeader,
  CCol, CRow
} from '@coreui/react'
import Pessoa from 'src/model/Pessoa'


const Page1 = () => {

  return (
  <CRow>
  <CCol xs={12}>
    <CCard className="mb-4">
      <CCardHeader>
        <strong>React Table</strong> <small>MUI Datatable example</small>
      </CCardHeader>
      <CCardBody>
        <p className="text-medium-emphasis small">
          Using the most basic table CoreUI, here&#39;show <code>&lt;@MUI/x-data-grid&gt;</code>-based
          tables look in @MUI.
        </p>
        <Pessoa />
      </CCardBody>
    </CCard>
  </CCol>
  </CRow>
  )
}
/*const Page1 = () => {
  return <Pessoa />
}*/

export default Page1
