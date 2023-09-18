import React from "react";
import "./header_part_name_addr.css"



const Header_part_name_addr = () =>{
    return(
        <>
        <div className="Header_part_name_addr_outer_div">
            <div className="name_adder_div">
                <table className="name_addr_table">
                    <tr>
                        <td>
                            Name :
                        </td>
                        <td>
                            <input type="text" className="input_field"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Address : 
                        </td>
                        <td>
                            <input type="text" className="input_field"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        </>
    )
}
export default Header_part_name_addr;