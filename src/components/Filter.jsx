import React from "react";
import { useState } from "react";

const Filter = (props) => {

  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title)
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 my-4 ">
      {
        filterData.map((data) => (
          <button className={
            `text-lg px-2 py-1 rounded-md font-medium text-white
                 bg-black hover:bg-opacity-50 border-2  cursor-pointer transition-all duration-300
                 ${category === data.title ? "bg-opacity-50 border-white" : " bg-opacity-40 border-transparent"} 
                 `}
            key={data.id}
             onClick ={() => filterHandler(data.title)} >

            {data.title} </button>
        ))
      }
    </div>
  )
}
export default Filter