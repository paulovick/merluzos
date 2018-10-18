import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const CheckboxToggle = ({ label, onClick, value }) =>{
    const { labelStyle, containerStyle } = styles

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
                            <Checkbox toggle onClick={onClick}
                                      checked={value} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
} 

const styles = {
    labelStyle: {
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