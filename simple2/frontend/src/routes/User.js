// /user/:id
export default ({ id }) => {
  return /*html*/ `
    <div>
      <h1>User ${id ?? ''}</h1>
    </div>
  `;
};
