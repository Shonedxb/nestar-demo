import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  const [title, setTitle] = useState<string>("Community Page");
  return (
    <div>
      COMMUNITY{""}
      <button onClick={() => alert("Button Clicked!")} style={{ marginLeft: "10px" }}>
        Click Me
      </button>
    </div>
  );
};

export default withLayoutMain(Community);