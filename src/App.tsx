import React, { useState, useEffect } from "react";

function App() {
  const DesignNumber = 6; // Define the Design number

  const [DesignComponent, setDesignComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import(`./components/Design${DesignNumber}`)
      .then((module) => setDesignComponent(() => module.default))
      .catch((err) => console.error("Failed to load component:", err));
  }, [DesignNumber]);

  return (
    <>
      {DesignComponent ? <DesignComponent /> : <p>Loading component...</p>}
    </>
  );
}

export default App;