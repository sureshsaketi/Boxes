const Box = (props) => {
  //  Write your code here.
  const { boxProps, boxText, boxSizeColor } = props;
  return (
    <div className={`${boxProps} ${boxSizeColor}`}>
      <h3>{boxText}</h3>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box
        boxProps="box-props"
        boxText="Small"
        boxSizeColor="box-small-color"
      />
      <Box
        boxProps="box-props"
        boxText="Medium"
        boxSizeColor="box-medium-color"
      />
      <Box
        boxProps="box-props"
        boxText="Large"
        boxSizeColor="box-large-color"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
