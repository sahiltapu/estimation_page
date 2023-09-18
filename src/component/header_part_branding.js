import React from "react";
import "./header_part_branding.css";

const Header_part_branding = () => {
  return (
    <div className="Header_part_outer_div">
      <div className="Branding_part">
        <table className="Branding_table">
          <tr>
            <td className="cellStyle">
              <div className="Estimate_div">ESTIMATE</div>
            </td>
            <td className="Date_Sl_td">
              <div>
                <table>
                  <tr>
                    <td><strong>Date :</strong></td>
                    <td>
                      <input type="date" className="date_input"/>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Sl.NO. :</strong></td>
                    <td>
                      <input type="text" className="Sl_input"/>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="Pumphouse_label">PUMP HOUSE</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Header_part_branding;
