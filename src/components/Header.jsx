import { useId, useState } from "react"
import { Filters } from "./Filters"

export function Header({ updateFilters }) {


    return (
        <header>
            <Filters updateFilters={updateFilters} />
        </header>
    )
}