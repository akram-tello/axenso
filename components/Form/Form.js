import React, { Component } from 'react'
import SelectBox from './components/SelectBox'
import RadioBox from './components/RadioBox'
import CheckBox from './components/CheckBox'

export class Form extends Component {

    render() {

        return (
            <>
                <div className="md:flex">
                    <SelectBox />
                    <RadioBox />
                    <CheckBox />
                </div>
            </>
        )
    }
}

export default Form
