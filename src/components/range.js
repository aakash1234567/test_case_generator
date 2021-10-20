import { changeDataReducer } from "../action";

const Range = (props) => {
  return (
    <div className="row mb-3 ">
      <div className="col-sm-5">
        <input
          type="number"
          value={props.low_val}
          onChange={(e) => {
            props.dispatch(changeDataReducer(e, props.case_id));
          }}
          id={props.low_id}
          className="form-control"
        />
      </div>
      <div className="col-sm-2">
        <p>
          {" "}
          &le; {props.name}
          <sub>{props.sub}</sub> &le;{" "}
        </p>
      </div>
      <div className="col-sm-5">
        <input
          type="number"
          onChange={(e) => {
            props.dispatch(changeDataReducer(e, props.case_id));
          }}
          value={props.high_val}
          className="form-control"
          id={props.high_id}
        />
      </div>
    </div>
  );
};

export default Range;
