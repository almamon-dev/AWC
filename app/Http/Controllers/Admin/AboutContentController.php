<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AboutContent;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutContentController extends Controller
{
    public function index()
    {
        $about = AboutContent::first();
        return Inertia::render('Admin/About/Index', [
            'about' => $about,
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'title' => 'nullable|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            'happy_customers' => 'nullable|string|max:255',
            'title_fr' => 'nullable|string|max:255',
            'subtitle_fr' => 'nullable|string|max:255',
            'description_fr' => 'nullable|string',
            'image_fr' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        ]);

        $data = $request->except(['image', 'image_fr']);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('about', 'public');
            $data['image_url'] = '/storage/' . $imagePath;
        }

        if ($request->hasFile('image_fr')) {
            $imageFrPath = $request->file('image_fr')->store('about', 'public');
            $data['image_url_fr'] = '/storage/' . $imageFrPath;
        }

        $about = AboutContent::first();
        if ($about) {
            $about->update($data);
        } else {
            AboutContent::create($data);
        }

        return redirect()->back()->with('success', 'About content updated successfully.');
    }
}
