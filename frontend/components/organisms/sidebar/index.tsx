import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { LuMoveLeft } from "react-icons/lu";
import { hierarchyData } from "./hierachy_structure";

interface SidebarProps {
  selectedFilters: any;
  setSelectedFilters: any;
}
const SideBar = ({ ...props }: SidebarProps) => {
  const [expandedNodes, setExpandedNodes] = useState<string[]>([]);

  const toggleNode = (id: string) => {
    setExpandedNodes((prev) =>
      prev.includes(id) ? prev.filter((node) => node !== id) : [...prev, id]
    );
  };

  const handleCheckboxChange = (id: string) => {
    props.setSelectedFilters((prev: string[]) =>
      prev.includes(id) ? prev.filter((filter) => filter !== id) : [...prev, id]
    );
  };

  const renderHierarchy = (nodes: any[]) => {
    return nodes.map((node) => (
      <div key={node.name} className={styles.node}>
        <div className={styles.nodeHeader}>
          {node.children && (
            <button
              className={styles.toggleButton}
              onClick={() => toggleNode(node.name)}
            >
              {expandedNodes.includes(node.name) ? "-" : "+"}
            </button>
          )}
          <label>
            <input
              type="checkbox"
              checked={props.selectedFilters.includes(node.name)}
              onChange={() => handleCheckboxChange(node.name)}
            />
            {node.name}
          </label>
        </div>
        {node.children && expandedNodes.includes(node.name) && (
          <div className={styles.children}>
            {renderHierarchy(node.children)}
          </div>
        )}
      </div>
    ));
  };
  return (
    <div className={styles.sidebar_wrapper}>
      <div className={styles.title}>
        <img src="/assets/logo.png" alt="" />
      </div>

      <div className={styles.sidebar_link}>
        {/* {navLinkdata.map((data) => (
          <NavBarLink
            key={data.text}
            text={data.text}
            icon={data.icon}
            link={data.link}
            isActive
          />
        ))} */}

        <div className={styles.side_checks}>
          {renderHierarchy(hierarchyData)}
        </div>

        <div className={styles.back_nav}>
          <Link href={"/"}>
            <LuMoveLeft className={styles.sidebar_icon} />
            <p>назад</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
