<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SellCar extends Model
{
    protected $fillable = [
        'vin',
        'year',
        'make',
        'model',
        'trim',
        'kilometres',
        'transmission',
        'province',
        'city',
        'postal_code',
        'address',
        'full_name',
        'email',
        'phone',
        'photos',
        'has_accident',
        'accident_details',
        'has_mechanical_issues',
        'mechanical_details',
        'symptoms',
        'status',
    ];

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    protected $casts = [
        'photos' => 'array',
        'symptoms' => 'array',
        'has_accident' => 'boolean',
        'has_mechanical_issues' => 'boolean',
    ];
}
