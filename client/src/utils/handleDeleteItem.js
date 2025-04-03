const handleDeleteItem = (dispatch, deleteAction, id) => {
  confirm('Підтвердіть видалення') && dispatch(deleteAction(id));
};

export default handleDeleteItem;
