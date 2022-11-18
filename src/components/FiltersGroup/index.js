import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    changeCategory,
    changeRating,
    searchByWord,
    clearAllFilters,
    ratingsList,
  } = props

  const searchByRating = each => {
    console.log(each.ratingId)
    changeRating(each.ratingId)
  }

  const searchByCategory = each => {
    console.log(each.id)
    changeCategory(each.id)
  }

  const searchByWords = event => {
    searchByWord(event.target.value.toLowerCase())
  }

  const clearFilters = () => {
    clearAllFilters()
  }

  const CategoryItem = each => {
    const {name, id} = each
    return (
      <li className="item" key={id}>
        <button className="btn" type="button" onClick={searchByCategory}>
          {name}
        </button>
      </li>
    )
  }

  const RatingItem = each => {
    const {ratingId, imageUrl} = each
    return (
      <li className="item" key={ratingId}>
        <button className="btn" type="button" onClick={searchByRating}>
          <img src={imageUrl} alt="rating" className="rating-image" /> & Up
        </button>
      </li>
    )
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          className="input"
          placeholder="Search"
          onChange={searchByWords}
        />
        <BsSearch className="search-icon" />
      </div>
      <div className="category-container">
        <h1 className="filter-heading">Category</h1>
        <ul className="List">
          {categoryOptions.map(eachCategory => CategoryItem(eachCategory))}
        </ul>
      </div>
      <div className="ratings-container">
        <h1 className="filter-heading">Rating</h1>
        <ul className="List">
          {ratingsList.map(eachRating => RatingItem(eachRating))}
        </ul>
      </div>
      <button className="button" type="button" onClick={clearFilters}>
        Clear filters
      </button>
    </div>
  )
}

export default FiltersGroup
