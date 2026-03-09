<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sell_car_id')->constrained()->onDelete('cascade');
            $table->string('stripe_payment_id')->unique();
            $table->string('stripe_payment_method_id');
            $table->decimal('amount', 10, 2);
            $table->string('currency', 3)->default('CAD');
            $table->string('status')->default('succeeded');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
