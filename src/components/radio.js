import { changeDataReducer } from "../action";

const Radio = (props) => {
  return (
    <div
      className="row"
      onChange={(e) => {
        props.dispatch(changeDataReducer(e, props.case_id));
      }}
    >
      <div className="col-3 form-check">
        <input
          type="radio"
          name="ar"
          value={true}
          className="form-check-input"
        />
        <label htmlFor="rad1" className="form-check-label">
          1 2 3 ... N
        </label>
      </div>
      <div className="col-3 form-check">
        <input
          type="radio"
          name="ar"
          value={false}
          defaultChecked
          className="form-check-input"
        />
        <label htmlFor="rad2" className="form-check-label">
          [1, 2, 3, ... ,N]
        </label>
      </div>
    </div>
  );
};
export default Radio;
