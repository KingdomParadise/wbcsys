<?php

namespace App\Http\Controllers;
use App\Models\Question;
use App\Models\Answer;
use App\Models\QAFollow;
use App\Models\QATagRelation;

use Illuminate\Http\Request;

class QAController extends Controller
{
    //
    function postQuestion() {
        
        $upload_path = public_path('upload/qa');
        
        $file = $request->file('attachment');

        $attachmentName = '';

        $question = new Question();

        if ($file) {
            $attachmentName = time() . '.' . $file->extension();
            $file->move($upload_path, $attachmentName);
            $question->attachment = $upload_path."/".$attachmentName;
        }

        $question->content = $request->content;
        $question->tag_id = $request->tag_id;
        $question->save();

        return response()->json([
            'success' => true,
            'msg' => [
                'desc' => 'question successfully posted',
                'user' => $question
            ]
        ], 200);
    }
}
