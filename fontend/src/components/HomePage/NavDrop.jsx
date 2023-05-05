import { navData } from "./data";
import React from 'react'
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import styles from './navdrop.module.css'
import { BiChevronDown } from 'react-icons/bi'
const NavDrop = () => {


  return (
    <div className={styles.bottom_cont} >
      <ul id={styles.bottom_category} >
        {navData?.map((el) => (
          <div id={styles.dropdown} key={el}>
            <li key={el} id={styles.dropbtn} >
              <Link to={`/products/${el.text.toLowerCase()}`}>{el.text}
                <Icon as={BiChevronDown} />
              </Link>

            </li>
            <div id={styles.dropcont} >
              <div className={styles.big_parent} >
                <div className={styles.right_grid} >
                  {el?.alldata?.map((divs) => (
                    <div key={divs.heading}>
                      <Link to={`/products/${el?.alldata?.heading}`} >
                        {" "}
                        <h2 className={styles.grid_head} >{divs.heading}</h2>
                      </Link>
                      {divs.child?.map((fields) => (
                        <Link
                          to={`/products/${el?.alldata?.heading}/${fields}`}>
                          {" "}
                          <p className={styles.hub} key={fields}>
                            {fields}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default NavDrop