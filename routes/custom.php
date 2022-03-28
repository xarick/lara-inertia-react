<?php

use App\Http\Controllers\SectionController;
use App\Http\Controllers\NewsController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('sections/', [SectionController::class, 'index'])->name('section.index');
    Route::get('sections/create', [SectionController::class, 'create'])->name('section.create');
    Route::post('sections', [SectionController::class, 'store'])->name('section.store');
    Route::get('sections/edit/{id}', [SectionController::class, 'edit'])->name('section.edit');
    Route::put('sections/{id}', [SectionController::class, 'update'])->name('section.update');
    Route::delete('sections/{id}', [SectionController::class, 'destroy'])->name('section.destroy');

    Route::get('news/', [NewsController::class, 'index'])->name('news.index');
    Route::get('news/create', [NewsController::class, 'create'])->name('news.create');
    Route::post('news', [NewsController::class, 'store'])->name('news.store');
    Route::get('news/edit/{id}', [NewsController::class, 'edit'])->name('news.edit');
    Route::put('news/{id}', [NewsController::class, 'update'])->name('news.update');
    Route::delete('news/{id}', [NewsController::class, 'destroy'])->name('news.destroy');
});