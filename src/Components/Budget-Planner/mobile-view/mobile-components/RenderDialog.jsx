import AddCategoryDialog from "../AddCategoryDialog";

const {
  default: AddAndEditSubCategoryDialog,
} = require("../AddAndEditSubCategoryDialog");
const { default: PaymentsDialog } = require("../PaymentsDialogMobile");
const { default: DialogBox } = require("./DialogBoxMobile");
function RenderDialogForCategory({
  openDialog,
  handleCloseDialog,
  category,
  setTrackChanges,
  isEditingCategory,
}) {
  console.log(isEditingCategory.isEditing);
  const obj = category.find((item) => item.id == isEditingCategory.categoryId);
  return (
    <DialogBox open={openDialog} onClose={handleCloseDialog}>
      <AddCategoryDialog
        onClose={handleCloseDialog}
        setTrackChanges={setTrackChanges}
        obj={obj}
        isEditingCategory={isEditingCategory}
      />
    </DialogBox>
  );
}
function RenderDialogForSubCategory({
  openDialog,
  handleCloseDialog,
  categoryId,
  setTrackChanges,
  isEditingSubCategory,
  isDesktop,
}) {
  return (
    <DialogBox
      open={openDialog}
      onClose={handleCloseDialog}
      isDesktop={isDesktop}
    >
      <AddAndEditSubCategoryDialog
        onClose={handleCloseDialog}
        setTrackChanges={setTrackChanges}
        categoryId={categoryId}
        isEditingSubCategory={isEditingSubCategory}
      />
    </DialogBox>
  );
}

function RenderDialogForPayment({
  openDialog,
  handleCloseDialog,
  subCategoryId,
  setTrackChanges,
}) {
  //  const obj = category.find((item) => item.id == isEditingCategory.categoryId);
  return (
    <DialogBox open={openDialog} onClose={handleCloseDialog}>
      <PaymentsDialog
        onClose={handleCloseDialog}
        setTrackChanges={setTrackChanges}
        subCategoryId={subCategoryId}
      />
    </DialogBox>
  );
}

export {
  RenderDialogForCategory,
  RenderDialogForPayment,
  RenderDialogForSubCategory,
};
