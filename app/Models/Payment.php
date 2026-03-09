<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = [
        'sell_car_id',
        'stripe_payment_id',
        'stripe_payment_method_id',
        'amount',
        'currency',
        'status',
    ];

    public function sellCar()
    {
        return $this->belongsTo(SellCar::class);
    }
}
