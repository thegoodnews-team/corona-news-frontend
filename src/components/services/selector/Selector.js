import React, { useState, useEffect, useRef } from 'react'
import './style.css'
import Checkbox from '../checkbox'
import arrowDown from '../../../assets/arrow_down.svg'
import arrowUp from '../../../assets/arrow_up.svg'
import PropTypes from 'prop-types'

export default function Selector({ items, onChange }) {
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
      <div className={`selector ${isOpen ? 'isOpen' : ''}`}>
        <span onClick={handleOpenSelector}>
          <p>Filtrar serviços por categoria</p>
          {
            counterCategoriesActive() > 0 && <span className="counter">{counterCategoriesActive()}</span>
          }
          {
            isOpen && <img className="arrow" src={arrowUp} />
          }
          {
            (!isOpen) && <img className="arrow" src={arrowDown} />
          }
        </span>

        <div className='listItem'>
          <ul>
            {
              categories.map(option => (
                <li key={option.label}>
                  <Checkbox label={option.label} onChange={() => { handleCheckbox(option) }} value={option.filterActive}/>
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
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}
