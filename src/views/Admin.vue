<template lang="pug">
div#adminorder
  b-container#admin
  b-row
    b-col(cols='12')
      b-nav(pills justified)
        b-nav-item(to='/admin/products' exact exact-active-class='active') 教材管理
        b-nav-item(to='/admin/orders' exact exact-active-class='active') 會員管理
    b-col(cols='12')
      router-view
</template>

<style>
#adminorder {
            background-color: #fff;
            width: 1150px;
            height: 715px;
            border-radius: 5px;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
        }
</style>
