import React, { useState, useEffect } from 'react'
import Selector from '../../components/services/selector'
import Badge from '../../components/services/badge'
import toHexColor from '../../utils/ColorPicker'
import Search from '../../components/services/search'
import getservicesFromSpreadsheet from '../../utils/spreadsheet'
import content from '../../utils/content'

import './style.css'
import Grid from '../../components/services/grid'
import normalizeText from '../../utils/NormalizeText'

export default function Services() {
  const [allServices, setAllServices] = useState([])
  const [services, setServices] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getservicesFromSpreadsheet(content.freeServices)
      .then(service => {
        setServices(service.reverse())
        setAllServices(service)
        setCategories([...getCategories(service)])
      })
  }, [])

  function getCategories(services) {
    return services
      .map(service => service.category)
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
    filter()
  }

  function handleSelectorChange(categories) {
    setCategories([...categories])
    filter()
  }

  function filter(searchText = '') {
    let filterServices = allServices
    const normalizedSearchText = normalizeText(searchText)

    const categoriesNameWithFilterActive = categories
      .filter(category => category.filterActive)
      .map(category => category.label)

    console.log(categoriesNameWithFilterActive)

    if (categoriesNameWithFilterActive.length > 0) {
      filterServices = filterServices.filter(service =>
        categoriesNameWithFilterActive.includes(service.category)
      )
    }

    if (normalizedSearchText) {
      filterServices = filterServices.filter(service => {
        return (
          normalizeText(service.category).includes(normalizedSearchText) ||
          normalizeText(service.title).includes(normalizedSearchText) ||
          normalizeText(service.description).includes(normalizedSearchText)
        )
      })
    }

    setServices([...filterServices])
  }

  return (
    <div className="services pt-5">
      <div className="container">
        <h1>Qual serviço gratuito você está buscando?</h1>
        <div className="row filterContainer">
          <div className="col-4">
            <Selector items={categories} onChange={handleSelectorChange} />
          </div>
          <div className="col-8">
            <Search filter={filter} />
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
        <Grid content={services} analyticsCategory="SERVICES" />
      </div>
    </div>
  )
}
