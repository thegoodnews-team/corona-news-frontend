import React, { useState, useEffect } from 'react'
import Selector from '../../components/services/selector'
import Badge from '../../components/services/badge'
import toHexColor from '../../utils/ColorPicker'
import Search from '../../components/services/search'
import getItemsFromSpreadsheet from '../../utils/spreadsheet'
import content from '../../utils/content'

import './style.css'

export default function Services() {
  const [services, setServices] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getItemsFromSpreadsheet(content.freeServices)
      .then(service => {
        setServices(service)
        setCategories([...getCategories(service)])
      })
  }, [])

  function getCategories(items) {
    return items
      .map(item => item.category)
      .sort((a, b) => a.localeCompare(b))
      .filter((category, index, self) => self.indexOf(category) === index)
      .map(category => {
        return {
          label: category,
          filterActive: false
        }
      })
  }

  function handleDesactive(category) {
    const index = categories.indexOf(category)
    categories[index].filterActive = !category.filterActive
    setCategories([...categories])
  }

  return (
    <div className="services pt-5" services={services}>
      <div className="container">
        <h1>Qual serviço gratuito você está buscando?</h1>
        <div className="row">
          <div className="col-4">
            <Selector items={categories} onChange={setCategories} />
          </div>
          <div className="col-8">
            <Search />
          </div>
        </div>
        <div className="categoriesActive">
          {
            categories.map(category =>
              category.filterActive &&
              <Badge key={category.label} text={category.label} backgroundcolor={'#' + toHexColor(category.label)} onClick={() => { handleDesactive(category) }} />
            )
          }
        </div>
      </div>
    </div>
  )
}
