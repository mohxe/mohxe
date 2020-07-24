<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$domains = new stdClass();
$domains->guest = "mohxe.io";
$domains->blog = "blog.mohxe.io";
$domains->admin = "admin.mohxe.io";
$domains->blog = "blog.mohxe.io";
$domains->wink = "wink.mohxe.io";



# Blog
Route::domain($domains->blog)->group(function(){
    Route::get("/{slug}", "blog\PostsViewController@showViewAction");
    Route::get("/", "blog\PostsViewController@indexViewAction");
});

# Admin
Route::domain($domains->admin)->group(function(){
    Voyager::routes();
});


# Guest
Route::domain($domains->guest)->group(function() {
    Route::get('/', function () {
        return view('welcome');
    });    
});
