import {useState} from "react";

function Playground() {
  const [tabs,setTabs] = useState<string[]>([]);
  
  function openFile(fileName: string) {
    setTabs([...tabs,fileName]);
  }

  function closeTab(fileName: string) {
    setTabs(tabs.filter((tab) => tab !== fileName));
  }

    return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#1e1e1e",
        color: "#cccccc",
      }}
    >
      {/* Temporary Files */}
      <div>
        <button onClick={() => openFile("main.ts")}>
          main.ts
        </button>

        <button onClick={() => openFile("App.tsx")}>
          App.tsx
        </button>

        <button onClick={() => openFile("README.md")}>
          README.md
        </button>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          height: "40px",
          backgroundColor: "#181818",
          borderBottom: "1px solid #3c3c3c",
        }}
      >
        {tabs.map((tab) => (
          <div
            key={tab}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
              backgroundColor: "#1e1e1e",
              borderRight: "1px solid #3c3c3c",
              color: "#cccccc",
              fontSize: "13px",
            }}
          >
            <span>{tab}</span>

            <button
              onClick={() => closeTab(tab)}
              style={{
                marginLeft: "10px",
                border: "none",
                background: "none",
                color: "#858585",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playground;