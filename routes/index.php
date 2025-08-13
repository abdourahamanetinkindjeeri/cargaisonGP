<?php
session_start();

$page = $_GET['page'] ?? 'login';

if (!isset($_SESSION['user']) && $page !== 'login') {
  header("Location: index.php?page=login");
  exit;
}

switch ($page) {
  case 'home':
    include 'views/home.html.php';
    break;
  case 'login':
    include 'views/login.html.php';
    break;
  default:
    include 'views/404.html.php';
    break;
}
