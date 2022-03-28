<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = News::with('section:id,name')->orderBy('id', 'DESC')->get();

        return Inertia::render('News/Index', [
            'news' => $news,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $sections = Section::orderBy('id', 'DESC')->get();
        return Inertia::render('News/Create', [
            'sections' => $sections,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = new News;
        $data->section_id = $request->section_id;
        $data->title = $request->title;
        $data->body = $request->body;
        $data->active = true;
        $data->save();

        return Redirect::route('news.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $new = News::with('section:id,name')->where('id', $id)->first();

        return Inertia::render('News/Show', [
            'new' => $new
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $new = News::findOrFail($id);
        $sections = Section::orderBy('name', 'ASC')->get();

        return Inertia::render('News/Edit', [
            'sections' => $sections,
            'new' => $new
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = News::findOrFail($id);
        $data->section_id = $request->section_id;
        $data->title = $request->title;
        $data->body = $request->body;
        $data->save();
        return Redirect::route('news.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = News::findOrFail($id);
        $data->delete();
        return Redirect::route('news.index');
    }
}
