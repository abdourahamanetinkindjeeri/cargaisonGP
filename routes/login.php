<?php
if (session_status() === PHP_SESSION_NONE) {
  session_start();
}

// Lecture des données JSON envoyées
$input = json_decode(file_get_contents("php://input"), true);
$email = trim($input['email'] ?? '');
$password = trim($input['password'] ?? '');

if (!$email || !$password) {
  http_response_code(400);
  echo json_encode(["success" => false, "message" => "Champs requis"]);
  exit;
}

// Récupération des utilisateurs depuis JSON server
$users = @file_get_contents("http://localhost:3000/users");
if ($users === false) {
  http_response_code(500);
  echo json_encode(["success" => false, "message" => "Impossible de récupérer les utilisateurs"]);
  exit;
}

$users = json_decode($users, true);
if (!is_array($users)) {
  http_response_code(500);
  echo json_encode(["success" => false, "message" => "Format des utilisateurs invalide"]);
  exit;
}

$foundUser = null;
foreach ($users as $user) {
  if (isset($user['email'], $user['password']) && $user['email'] === $email && $user['password'] === $password) {
    $foundUser = $user;
    break;
  }
}

if ($foundUser !== null) {
  // Stocker uniquement l'email ou un identifiant, pas tout le tableau complet
  $_SESSION['profile'] = $foundUser['profile'];
  $_SESSION['user'] = $foundUser['email'];
  echo json_encode(["success" => true]);
} else {
  http_response_code(401);
  echo json_encode(["success" => false, "message" => "Identifiants invalides"]);
}
