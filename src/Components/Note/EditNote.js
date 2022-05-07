export const EditNote = ({ setEdit }) => {
  return (
    <div>
      <textarea cols="25" rows="5"></textarea>
      <div>
        <button>Save</button>
        <button onClick={() => setEdit(false)}>Close</button>
      </div>
    </div>
  );
};
