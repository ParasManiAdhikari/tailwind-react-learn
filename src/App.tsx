import React, { useState, useEffect } from "react";

function App() {
  const testNumber = 2; // Define the test number
  const [TestComponent, setTestComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import(`./components/Test${testNumber}`)
      .then((module) => setTestComponent(() => module.default))
      .catch((err) => console.error("Failed to load component:", err));
  }, [testNumber]);

  return (
    <>
      {TestComponent ? <TestComponent /> : <p>Loading component...</p>}
    </>
  );
}

export default App;