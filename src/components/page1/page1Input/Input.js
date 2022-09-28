import "./Input.css";
import Wrapper from "../../Helpers/Wrapper";

function PageInput(props) {
  const Register = (e) => {
    e.preventDefault();

    console.log(fff, lll);
  };

  let fff;
  const fName = (event) => {
    console.log(event.target.value);
    fff = event.target.value;
  };
  let lll;
  const lName = (event) => {
    console.log(event.target.value);
    lll = event.target.value;
  };
  console.log(fff, lll);
  return (
    <Wrapper>
      <form className="container">
        <h2 className="Input">Input Form</h2>
        <label>
          <b>First Name</b>
        </label>
        <input type="text" onChange={lName} />
        <label>
          <b>Last Name</b>
        </label>
        <input type="text" onChange={fName} />
        <button onClick={Register}>Submit</button>
      </form>
    </Wrapper>
  );
}

export default PageInput;
