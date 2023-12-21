import { useContext } from "react"
import { FiltersContext } from "../context/filters"

export function useFilters() {

    const { filters, setFilters } = useContext(FiltersContext)
  
    const filterBooks = (books) => {
      return books.filter(element => {
        return (
          (element.book.genre == filters.genre || filters.genre === "all")
          &&
          element.book.pages >= filters.pages
        )
        
      })
    }
  
    return { setFilters, filterBooks }
  }