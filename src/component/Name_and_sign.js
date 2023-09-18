import React from "react";
import "./Name_and_sign.css";
import { useState } from "react";

const Name_and_sign = () => {
  const [Show, setShow] = useState(false);

  return (
    <>
      <div className="Name_and_sign_outer_div">
        <div className="Name_and_sign_div">
          <span className="Name_sign_span">
            Santosh Kumar Mishra <br />
            <strong>signature</strong>
          </span>
        </div>
      </div>

      <div className="Account_details_outerdiv">
        <div className="Account_details_div">
        <button type="button" onClick={() => setShow(!Show)} className="Show_or_height_details">
        ACCOUNT DETAILS
          </button>
          {Show && (
            <>
            <p>
                NAME - <strong>PUMP HOUSE</strong>
              </p>
              <p>
                Account No. - <strong>42111129096</strong>
              </p>
              <p>
                IFSC CODE - <strong>SBIN0000143</strong>
              </p>
              <p>
                BANK - <strong>S.B.I MAIN BRANCH NAYAGARH</strong>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Name_and_sign;
