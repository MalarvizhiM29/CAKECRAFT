import "./Panel.css"

const Panel = (props) => {
  const {opencakeForm,closecakeForm}=props
  return (
    <div className="panel">
      <div className="panelLeft">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2965/2965655.png"
          alt="cake"
          height="50"
          width="50"
        />
        <h1 id="caketitle">CakeCraft</h1>
      </div>
      <div className="panelRight">
        <a onClick={opencakeForm}>Add cake</a>
        <a onClick={closecakeForm}>Cakes</a>
      </div>
    </div>
  );
};

export default Panel;
