"use client"
import React, { useEffect } from "react"
import styles from "./styles.module.css"


import { ISearchLayout } from "./interface"
import { useRouter } from "next/navigation"
import TopBar from "@/components/organisms/topbar"
import SideBar from "@/components/organisms/sidebar"

const SearchLayout = ({ children }: ISearchLayout) => {

 
  return (

    <div className={styles.layout_wrapper}>
      <div className={styles.sidebar_wrapper}>
        <SideBar />
      </div>

      <div className={styles.main_wrapper}>
        <div className={styles.topBar}>
          <TopBar />
        </div>

        <div className={styles.dashboard_wrapper}>{children}</div>
      </div>
    </div>
  
  )
}

export default SearchLayout
