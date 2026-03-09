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
        Schema::create('sell_cars', function (Blueprint $table) {
            $table->id();
            // Vehicle Details
            $table->string('vin')->nullable();
            $table->integer('year')->nullable();
            $table->string('make')->nullable();
            $table->string('model')->nullable();
            $table->string('trim')->nullable();
            $table->string('kilometres')->nullable();
            $table->string('transmission')->nullable();
            
            // Location & Contact
            $table->string('province')->nullable();
            $table->string('city')->nullable();
            $table->string('postal_code')->nullable();
            $table->text('address')->nullable();
            $table->string('full_name')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            
            // Photos (Store paths or URLs)
            $table->json('photos')->nullable();
            
            // Condition
            $table->boolean('has_accident')->default(false);
            $table->text('accident_details')->nullable();
            $table->boolean('has_mechanical_issues')->default(false);
            $table->text('mechanical_details')->nullable();
            $table->json('symptoms')->nullable();
            
            // Status
            $table->string('status')->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sell_cars');
    }
};
