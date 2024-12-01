"use client"
import React from "react"
import styles from "./styles.module.css"


import { ISearchLayout } from "./interface"
import TopBar from "@/components/organisms/topbar"
import SideBar from "@/components/organisms/sidebar"



const SearchLayout = ({ children, searchparam, setSearchQuery, selectedFilters, setSelectedFilters }: ISearchLayout) => {


 
  return (

    <div className={styles.layout_wrapper}>
      <div className={styles.sidebar_wrapper}>
        <SideBar selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      </div>

      <div className={styles.main_wrapper}>
        <div className={styles.topBar}>
          <TopBar searchparam={searchparam} setSearchQuery={setSearchQuery}/>
        </div>

        <div className={styles.dashboard_wrapper}>{children}</div>
      </div>
    </div>
  
  )
}

export default SearchLayout
