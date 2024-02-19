<?php

use App\Http\Controllers\AutenticateController;
use App\Http\Controllers\ConfrontationController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\TeamUserController;
use App\Http\Controllers\TournamentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VideogameController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/**Route By Users */
Route::resource('users', UserController::class);

/**Route By Confrontations */
Route::resource('confrontations', ConfrontationController::class);

/**Route By Tournaments */
Route::resource('tournaments', TournamentController::class);
Route::get('/tournaments/{id}/confrontations', [TournamentController::class, 'showConfrontations']);

/**Route By Videogames */
Route::resource('videogames', VideogameController::class);

/**Route By Teams */
Route::resource('teams', TeamController::class);
Route::get('/teams/{id}/integrants', [TeamController::class, 'showIntegrants']);

/**Route By Team Users */
Route::resource('team_users', TeamUserController::class);

/* Authentication routes */
Route::post('register',[AutenticateController::class,'Register']);
Route::post('login',[AutenticateController::class,'Login']);
Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::post('logout',[AutenticateController::class,'Logout']);
});