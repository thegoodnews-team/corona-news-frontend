import React, { useState, useEffect, useRef } from 'react'
import './style.css'
import Checkbox from '../checkbox'
import getIcon from '../../../utils/Icons'
import PropTypes from 'prop-types'

export default function Selector({ color, items, onChange, labelFilter }) {
  const [isOpen, setIsOpen] = useState(false)
  const [categories, setCategories] = useState([])

  const selectorRef = useRef()

  const handleClickOutside = e => {
    if (!selectorRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    setCategories([...items])
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [items])

  const handleOpenSelector = () => {
    setIsOpen(!isOpen)
  }

  const handleCheckbox = (category) => {
    const index = categories.indexOf(category)
    categories[index].filterActive = !category.filterActive
    setCategories([...categories])
    onChange([...categories])
  }

  const counterCategoriesActive = () => {
    return categories.filter(category => category.filterActive).length
  }

  return (
    <div className="selectorContainer" ref={selectorRef} >
      <div className={`selector ${isOpen ? 'isOpen' : ''}`} style={{ borderColor: color, borderBottomColor: color, color: color }}>
        <span onClick={handleOpenSelector}>
          <p>{labelFilter}</p>
          {
            counterCategoriesActive() > 0 && <span className="counter" style={{ backgroundColor: color }}>{counterCategoriesActive()}</span>
          }

          <img className={`arrow ${isOpen ? 'arrowUp' : ''}`} src={getIcon(color).arrow} />

        </span>

        <div className='listItem scroll' style={{ boxShadowColor: color }}>
          <ul>
            {
              categories.map(option => (
                <li key={option.label}>
                  <Checkbox color={color} label={option.label} onChange={() => { handleCheckbox(option) }} value={option.filterActive} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

Selector.propTypes = {
  color: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  labelFilter: PropTypes.string.isRequired
}
