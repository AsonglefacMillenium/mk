import React from 'react'
import styles from "./styles.module.css"
import SearchLayout from '@/components/templates/layout_search'
import EmployeeCard from '@/components/organisms/employee_card'

export const SearchPage = () => {
  return (
    <SearchLayout>
    <div className={styles.cards_wrapper}>
<EmployeeCard />
<EmployeeCard />
<EmployeeCard />
<EmployeeCard />
    </div>
  </SearchLayout>
  )
}
