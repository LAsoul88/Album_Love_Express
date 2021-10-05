const $editModal = $('.edit-modal');
const $edit = $('.edit');
const $editClose = $('.edit-close');

const $deleteModal = $('.delete-modal');
const $delete = $('.delete');
const $deleteClose = $('.delete-close');

const $avatarModal = $('.avatar-modal');
const $avatar = $('.avatar');
const $avatarClose = $('.avatar-close');

// const $html = $('html');



$edit.on('click', (e) => {
  $(`#e${e.target.dataset.updateId}`).css('display', 'block');
});

$editClose.on('click', () => {
  $editModal.css('display', 'none');
});

$delete.on('click', (e) => {
  $(`#d${e.target.dataset.deleteId}`).css('display', 'block');
});

$deleteClose.on('click', () => {
  $deleteModal.css('display', 'none');
});

$avatar.on('click', (e) => {
  $(`#${e.target.dataset.avatarId}`).css('display', 'block');
});

$avatarClose.on('click', () => {
  $avatarModal.css('display', 'none');
});

// $html.on('click', () => {
//   $editModal.css('display', 'none');
//   $deleteModal.css('display', 'none');
//   $avatarModal.css('display', 'none');
// });