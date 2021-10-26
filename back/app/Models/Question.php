<?php

namespace App\Models;

use App\Events\QuestionCreated;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Answer;
use App\Models\QAFollow;

class Question extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function answer() {
        return $this->hasMany(Answer::class)->orderBy('updated_at', 'desc');
    }

    public function qafollow() {
        return $this->hasMany(QAFollow::class);
    }
}
