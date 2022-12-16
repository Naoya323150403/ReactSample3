export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled Jsx -</p>
        <button className="button">FIGHT!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          justify-content: space-around;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }

        .button {
          background-color: #abedd8;
          border: None;
          padding: 8px;
        }
      `}</style>
    </>
  );
};
