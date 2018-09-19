const BucketList = require('./models/bucket_list.js');
const WishListView = require('./views/wish_list_view.js');
const FormView = require('./views/form_view.js');

document.addEventListener('DOMContentLoaded', ()=> {

  const wishForm = document.querySelector('#wishes-form');
  const formView = new FormView(wishForm);
  formView.bindEvents();

  const wishDiv = document.querySelector('#wishes-view');
  const wishListView = new WishListView(wishDiv);
  wishListView.bindEvents();

  const url = 'http://localhost:3000/api/bucket_list';
  const bucketList = new BucketList(url);
  bucketList.getData();
  bucketList.bindEvents();
});
