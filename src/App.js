import React from "react";
import Header_part_branding from "./component/header_part_branding";
import Header_part_loc_phno from "./component/header_part_loc_phno";
import Header_part_deals_in from "./component/header_part_deals_in";
import Header_part_name_addr from "./component/header_part_name_addr";
import Item_table from "./component/Items_table";
import Name_and_sign from "./component/Name_and_sign";

const App = () => {
  return (
    <>
      <div>
        <header>
          <Header_part_branding />
          <Header_part_loc_phno />
          <Header_part_deals_in />
          <Header_part_name_addr />
        </header>
        <body>
          <Item_table />
        </body>
        <footer>
          <Name_and_sign />
        </footer>
      </div>
    </>
  );
};
export default App;
