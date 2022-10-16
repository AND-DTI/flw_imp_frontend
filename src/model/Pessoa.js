import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'

const Pessoa = () => {
  const [data, setData] = useState([])
  const getPessoa = async () => {
    await axios.get('https://www.balldontlie.io/api/v1/teams').then((res) => {
      setData(res.data.data)
    })
  }

  useEffect(() => {
    getPessoa()
  }, [])

  const rows = data.map((row) => ({
    id: row.id,
  }))

  //console.log(JSON.stringify(data))
  //console.log(data)
  //return <div>pessoas2</div>
  //return <div>pessoas2</div>
  return JSON.stringify(data)
}

export default Pessoa
