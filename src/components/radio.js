import { changeDataReducer } from "../action";

const Radio = (props) => {
  return (
    <div
      className="row"
      onChange={(e) => {
        props.dispatch(changeDataReducer(e, props.case_id));
      }}
    >
      <div className="col-3">
        <input type="radio" name="ar" value={true} />
        <label htmlFor="rad1">1 2 3 ... N</label>
      </div>
      <div className="col-3">
        <input type="radio" name="ar" value={false} defaultChecked />
        <label htmlFor="rad2">[1, 2, 3, ... ,N]</label>
      </div>
    </div>
  );
};
export default Radio;
