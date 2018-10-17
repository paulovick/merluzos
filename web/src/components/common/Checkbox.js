import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const CheckboxToggle = (props) =>{
    const { label } = props
    const { checkboxStyle, labelStyle, containerStyle } = styles

    return(
        <table>
            <tbody style={containerStyle}>
                <tr>
                    <td style={{ width: '80%', position: "relative"}}>
                        <label style={labelStyle}>
                            { label }
                        </label>
                    </td>
                    <td style={{ width: '20%'}}>
                        <Checkbox toggle/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
} 


// <div style={containerStyle}>
// <label style={labelStyle}>
//     { label }
// </label>
//     <Checkbox toggle style={checkboxStyle}/>
// </div>

const styles = {
    checkboxStyle: {
        position: "right"
    },
    labelStyle: {
        /* paddingRight: "30%" */
        position: "absolute",
        left: "0px",
        top: "0px"
    },
    containerStyle: {
        width: "100%",
        marginTop: 20,
        marginBottom: 10
    }
   
}

export { CheckboxToggle }