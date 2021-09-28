import React, { Component } from "react";

function SelectBox() {
    const options = [
        {
            value: "0",
        },
        {
            value: "1",
        },
        {
            value: "2",
        },
        {
            value: "3",
        },
    ];
    return (
        <>
            <div className="">
               <label>How many people be attending?</label>
                <select>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>{option.value}</option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default SelectBox;