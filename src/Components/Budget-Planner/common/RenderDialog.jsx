import AddCategoryDialog from "./AddCategoryDialog";

const {
  default: AddAndEditSubCategoryDialog,
} = require("./AddAndEditSubCategoryDialog");
const { default: PaymentsDialog } = require("./PaymentsDialog");
const { default: DialogBox } = require("./DialogBox");
function RenderDialogForCategory({
  openDialog,
  handleCloseDialog,
  category,
  setTrackChanges,
  isEditingCategory,
  isDesktop,
}) {
  const obj = Array.isArray(category)
    ? category.find((item) => {
        return item.id == isEditingCategory.categoryId;
      })
    : category;
  return (
    <DialogBox
      open={openDialog}
      onClose={handleCloseDialog}
      isDesktop={isDesktop}
    >
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
  isEditingTransaction,
  isDesktop,
}) {
  return (
    <DialogBox
      open={openDialog}
      onClose={handleCloseDialog}
      isDesktop={isDesktop}
    >
      <PaymentsDialog
        isEditingTransaction={isEditingTransaction}
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
