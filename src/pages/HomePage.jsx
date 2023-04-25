export const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
        backgroundColor: "#0098c7",
      }}
    >
      <h1 style={{ color: "white", fontStyle: "italic" }}>
        Kryds og bol... Mandril!
      </h1>
      <button>Start spillet</button>
    </div>
  );
};
