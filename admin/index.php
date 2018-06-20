
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <?php
    include '../models/bootstrap.php';
    ?>
    <style media="screen">
    .modal-backdrop {
        display: none!important;
      }
    </style>
  </head>
  <body>
    <nav class="navbar navbar-dark bg-success justify-content-between">
      <a class="navbar-brand text-white">MIS Service Support System</a>
      <form class="form-inline">

        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Log out</button>
      </form>
    </nav>
      <div class="row">
        <div class="col-sm-2 dark-grey custom-sidenav ">
          <div class="text-center mt-5">
            <img src="../assets/images/avatar.png" class="rounded" width="100px" height="100px" style="border:0px solid white;border-radius:50%!important;" alt="profile_picture">
            <h5 class="mt-1 text-white" data-toggle="tooltip" data-placement="top" title="Click to Edit Profile">User Name</h5>
          </div>
          <div class=" m-3 text-white">
            <?php include 'sidenav.php' ?>
          </div>
      </div>
      <div class="col-sm-2" style="z-index:-1;">

      </div>
      <div class="col-sm-10">
        <div id="main" class="m-5">
          <ion-icon name="heart"></ion-icon>
        </div>
      </div>
    </div>
    <div class="row" id = "modalsContainer">

    </div>

  <script src="https://unpkg.com/ionicons@4.1.2/dist/ionicons.js"></script>
  </body>
  <script type="text/babel" src="users.js"></script>
  <script type="text/babel" src="equipments.js"></script>
  <script type="text/babel" src="utils.js"></script>
  <script type="text/babel" src="modals.js"></script>
  <script type="text/babel">
    navToUsers();
  </script>
</html>
