import React, { useEffect, useState } from 'react'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const SwapiFC = () => {
  const [results, setCharacters] = useState(null)

  useEffect(() => {
    async function fetchCharacters() {
      let res = await fetch('https://swapi.dev/api/people/')
      let data = await res.json()
      const results = []
      data.results.forEach((character) => {
        results.push({
          name: character.name,
          height: character.height,
          hair_color: character.hair_color,
          skin_color: character.skin_color,
          eye_color: character.eye_color,
          gender: character.gender,
        })
      })
      setCharacters(results)
    }
    fetchCharacters()
  }, [])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Star Wars API consumed in a functional component</CCardHeader>
            <CCardBody>
              <CTable hover responsive align="middle" className="mb-0 border">
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">Character</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Height</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Hair Color</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Skin Color</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Eye Color</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Gender</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {results ? (
                    results.map((character, i) => {
                      return (
                        <CTableRow key={i}>
                          <CTableDataCell className="text-center">{character.name}</CTableDataCell>
                          <CTableDataCell className="text-center">
                            {character.height}
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            {character.hair_color}
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            {character.skin_color}
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            {character.eye_color}
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            {character.gender}
                          </CTableDataCell>
                        </CTableRow>
                      )
                    })
                  ) : (
                    <CTableRow>
                      <CTableDataCell>No results found</CTableDataCell>
                    </CTableRow>
                  )}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default SwapiFC
