<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Authorization, x-socket-id, Access-Control-Allow-Origin, X-Requested-With");

Route::middleware(['cors'])->group(function(){
    // Broadcast::routes();

    Route::post('/auth/login', 'App\Http\Controllers\AuthController@login');
    Route::post('/auth/register', 'App\Http\Controllers\AuthController@register');
    
    Route::group([
        'middleware' => 'jwt.verify',
    ], function ($router) {
        
        Route::get('/departments', 'App\Http\Controllers\DepartmentMasterController@index');
        Route::get('/tags', 'App\Http\Controllers\TagMasterController@index');
        Route::get('/roles', 'App\Http\Controllers\RoleMasterController@index');
        Route::group([
            'prefix' => 'auth'
        ], function($router) {
            Route::post('/logout', 'App\Http\Controllers\AuthController@logout');
            Route::post('/refresh', 'App\Http\Controllers\AuthController@refresh');
            Route::get('/get_user', 'App\Http\Controllers\AuthController@userProfile');
            Route::post('/get_auth', 'App\Http\Controllers\AuthController@getAuth');
        });

        Route::group([
            'prefix' => 'qa'
        ], function($router) {
            Route::post('/post_question', 'App\Http\Controllers\QAController@postQuestion');
        });
    });
});
