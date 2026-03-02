<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutContent extends Model
{
    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'image_url',
        'happy_customers',
        'title_fr',
        'subtitle_fr',
        'description_fr',
        'image_url_fr',
    ];
}
