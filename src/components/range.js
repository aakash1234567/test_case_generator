import { changeDataReducer } from "../action";

const Range = (props) => {
  return (
    <div className="row container">
      <div className="col-5">
        <input
          type="number"
          value={props.low_val}
          onChange={(e) => {
            props.dispatch(changeDataReducer(e, props.case_id));
          }}
          id={props.low_id}
        />
      </div>
      <div className="col-2">
        <p>
          {" "}
          &le; {props.name}
          <sub>{props.sub}</sub> &le;{" "}
        </p>
      </div>
      <div className="col-5">
        <input
          type="number"
          onChange={(e) => {
            props.dispatch(changeDataReducer(e, 1));
          }}
          value={props.high_val}
          id={props.high_id}
        />
      </div>
    </div>
  );
};

export default Range;
