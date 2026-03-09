<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\SellCar;
use App\Models\Payment; // Added
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB; // Added
use Inertia\Inertia;

class SellCarController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            // Vehicle Details (From OfferForm/InitialData)
            'tab' => 'nullable|string',
            'vin' => 'nullable|string',
            'year' => 'nullable|integer',
            'make' => 'nullable|string',
            'model' => 'nullable|string',
            'trim' => 'nullable|string',
            'kilometres' => 'nullable|string',
            'transmission' => 'nullable|string',

            // Location & Contact
            'location.province' => 'required|string',
            'location.city' => 'required|string',
            'location.postalCode' => 'required|string',
            'location.address' => 'required|string',
            'contact.fullName' => 'required|string',
            'contact.email' => 'required|email',
            'contact.phone' => 'required|string',

            // Photos (These will be Files)
            'photos' => 'nullable|array',

            // Condition
            'condition.hasAccident' => 'required|boolean',
            'condition.accidentDetails' => 'nullable|string',
            'condition.hasMechanicalIssues' => 'required|boolean',
            'condition.mechanicalDetails' => 'nullable|string',
            'condition.symptoms' => 'nullable|array',
            'payment_method_id' => 'required|string',
        ]);

        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

        try {
            DB::beginTransaction();

            $paymentIntent = \Stripe\PaymentIntent::create([
                'amount' => 2999, // 29.99 in cents
                'currency' => 'cad',
                'payment_method' => $request->payment_method_id,
                'confirmation_method' => 'manual',
                'confirm' => true,
                'return_url' => route('sell.car'),
            ]);

            // Handle Photo Uploads
            $photoPaths = [];
            if ($request->has('photos')) {
                foreach ($request->file('photos') as $label => $file) {
                    if ($file instanceof \Illuminate\Http\UploadedFile) {
                        $path = $file->store('sell_cars/photos', 'public');
                        $photoPaths[$label] = Storage::url($path);
                    }
                }
            }

            // Create SellCar (Booking)
            $sellCar = SellCar::create([
                'vin' => $request->vin,
                'year' => $request->year,
                'make' => $request->make,
                'model' => $request->model,
                'trim' => $request->trim,
                'kilometres' => $request->kilometres,
                'transmission' => $request->transmission,
                'province' => $request->input('location.province'),
                'city' => $request->input('location.city'),
                'postal_code' => $request->input('location.postalCode'),
                'address' => $request->input('location.address'),
                'full_name' => $request->input('contact.fullName'),
                'email' => $request->input('contact.email'),
                'phone' => $request->input('contact.phone'),
                'photos' => $photoPaths,
                'has_accident' => $request->input('condition.hasAccident'),
                'accident_details' => $request->input('condition.accidentDetails'),
                'has_mechanical_issues' => $request->input('condition.hasMechanicalIssues'),
                'mechanical_details' => $request->input('condition.mechanicalDetails'),
                'symptoms' => $request->input('condition.symptoms'),
                'status' => 'pending',
            ]);

            // Create Payment
            Payment::create([
                'sell_car_id' => $sellCar->id,
                'stripe_payment_id' => $paymentIntent->id,
                'stripe_payment_method_id' => $request->payment_method_id,
                'amount' => 29.99,
                'currency' => 'CAD',
                'status' => $paymentIntent->status,
            ]);

            DB::commit();

            return redirect()->route('sell.car')->with('success', 'Your car listing has been submitted and payment processed!');

        } catch (\Exception $e) {
            DB::rollBack();
            return back()->withErrors(['payment' => $e->getMessage()]);
        }
    }
}
