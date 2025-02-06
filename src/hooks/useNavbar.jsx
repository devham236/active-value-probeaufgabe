import React, { useState } from "react";

const useNavbar = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  return { sidebarOpened, setSidebarOpened };
};

export default useNavbar;
