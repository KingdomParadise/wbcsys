<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'employee_name' => 'admin',
            'employee_id' => 'admin',
            'login_id' => 'admin',
            'password' => Hash::make('admin'),
            'del_flag' => '0',
            'hire_date' => Carbon::now()->format("Y-m-d"),
            'leave_date' => Carbon::now()->format("Y-m-d"),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('users')->insert([
            'employee_name' => 'user',
            'employee_id' => 'user',
            'login_id' => 'user',
            'password' => Hash::make('user'),
            'del_flag' => '0',
            'hire_date' => Carbon::now()->format("Y-m-d"),
            'leave_date' => Carbon::now()->format("Y-m-d"),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        
    }
}
