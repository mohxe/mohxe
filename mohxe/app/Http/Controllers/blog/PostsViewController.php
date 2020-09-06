<?php

namespace App\Http\Controllers\blog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PostsViewController extends Controller
{
    

    public function indexViewAction()
    {
        return view("blog.posts.index");
    }

    public function showViewAction($postSlug)
    {
        return view("blog.posts.show");
    }
}
