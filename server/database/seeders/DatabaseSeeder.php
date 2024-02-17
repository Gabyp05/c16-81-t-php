<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            TeamSeeder::class,
            TeamUserSeeder::class,
            StatusSeeder::class,
            PositionSeeder::class,
            ConfrontationSeeder::class,
            VideogameSeeder::class,
            TournamentSeeder::class,
        ]);

    }
}
