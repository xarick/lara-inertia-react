<?php

namespace App\Admin\Controllers;

use App\Models\News;
use App\Models\Section;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class NewsController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'News';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new News());

        $grid->column('id', __('Id'));
        // $grid->column('section_id', __('Section id'));
        $grid->column('section.name', __('Section'));
        $grid->column('title', __('Title'));
        $grid->column('body', __('Body'));
        $grid->column('active', __('Active'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(News::findOrFail($id));

        $show->field('id', __('Id'));
        // $show->field('section_id', __('Section id'));
        $show->field('section.name', __('Section'));
        $show->field('title', __('Title'));
        $show->field('body', __('Body'));
        $show->field('active', __('Active'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new News());

        $sections = Section::orderBy('id', 'DESC')->pluck('name','id')->all();
        // $form->number('section_id', __('Section id'));
        $form->select('section_id', 'Section')->options($sections);
        $form->text('title', __('Title'));
        $form->textarea('body', __('Body'));
        $form->switch('active', __('Active'))->default(1);

        return $form;
    }
}
