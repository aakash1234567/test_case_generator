import { changeDataReducer } from "../action";

const Single = (props) => {
  return (
    <div className="mb-3 row">
      <label className="col-sm-4 col-form-label" htmlFor={props.id}>
        {props.id} =
      </label>
      <div className="col-sm-5">
        <input
          className="form-control"
          type="number"
          id={props.id}
          value={props.val}
          onChange={(e) => {
            props.dispatch(changeDataReducer(e, props.case_id));
          }}
        />
      </div>
    </div>
  );
};

export default Single;
