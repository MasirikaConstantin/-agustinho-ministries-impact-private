<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});
Route::get("/about", function () {
    return Inertia::render('About');
})->name('about');
Route::get("/contact", function () {
    return Inertia::render('ContactPage');
})->name('contact');
Route::get("/achievements", function () {
    return Inertia::render('AchievementsPage');
})->name('achievements');
Route::get("/vision", function () {
    return Inertia::render('VisionPage');
})->name('vision');
Route::get("/support", function () {
    return Inertia::render('Support');
})->name('support');

Route::get("/gallery", function () {
    return Inertia::render('Gallery');
})->name('gallery');

Route::get("/services", function () {
    return Inertia::render('Services');
})->name('services');
Route::fallback(function () {
    return Inertia::render('404');
});
Route::get("/sponsors", function () {
    return Inertia::render('Sponsors');
})->name('sponsors');

Route::get("/gallery/ecole", function () {
    return Inertia::render('activite1/GalleryPage');
})->name('ecole');
Route::get("/gallery/hopital", function () {
    return Inertia::render('activite1/GalleryPage');
})->name('hopital');
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
