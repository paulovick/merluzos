import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const CheckboxToggle = (props) =>{
    const { label } = props
    const { checkboxStyle, labelStyle, containerStyle } = styles

    return(
        <div style={containerStyle}>
            <table style={{width: "100%"}}>
                <tbody>
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
        </div>
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
    },
    labelStyle: {
        /* paddingRight: "30%" */
        position: "absolute",
        left: "0px",
        top: "0px",
        color: "white",
        fontWeight: "bold",
        fontSize: "large"
    },
    containerStyle: {
        width: "100%",
        marginTop: 10
    }
   
}

export { CheckboxToggle }