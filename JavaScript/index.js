let data = {
  questions: [
    {
      questionId: 1,
      questionText: "Question 1",
    },
    {
      questionId: 2,
      questionText: "Question 2",
    },
    {
      questionId: 3,
      questionText: "Question 3",
    },
    {
      questionId: 4,
      questionText: "Question 4",
    },
  ],
  comments: [
    {
      commentId: 1,
      questionId: 1,
      commentText: "Comment 1",
    },
    {
      commentId: 2,
      questionId: 1,
      commentText: "Comment 2",
    },
    {
      commentId: 3,
      questionId: 1,
      commentText: "Comment 3",
    },
    {
      commentId: 4,
      questionId: 3,
      commentText: "Comment 4",
    },
    {
      commentId: 5,
      questionId: 2,
      commentText: "Comment 5",
    },
  ],
  replies: [
    {
      commentId: 1,
      replyId: 1,
      replyText: "Reply 1",
    },
    {
      commentId: 2,
      replyId: 2,
      replyText: "Reply 2",
    },
    {
      commentId: 3,
      replyId: 3,
      replyText: "Reply 3",
    },
    {
      commentId: 3,
      replyId: 4,
      replyText: "Reply 4",
    },
    {
      commentId: 5,
      replyId: 5,
      replyText: "Reply 5",
    },
  ],
};


const {questions , comments , replies} = data

const array = [];

questions.map((q)=>{
  comments.map( (c)=>{
    if(c.questionId == q.questionId){
      array.push({
        questions :q,
        comments : c,
        replies: replies.find( (r)=> r.commentId == c.commentId)
      })
    }
  })
})

console.log(array)

// const {questions, comments, replies} = data

// const arr = []

// questions.map( (q)=>{
//   comments.map( (c)=>{
//    if(c.questionId == q.questionId){
//      arr.push({
//        questions : q,
//        comments : c,
//        replies: replies.filter((r)=> r.commentId == c.commentId)
//      })
//    }
//   })
// })


// console.log(arr)
// const { questions, comments, replies } = data;

// const result = [];
// questions.map((q) =>
//   comments.map((c) => {
//     if (c.questionId == q.questionId) {
//       result.push({
//         questions: q,
//         comments: c,
//         replies:replies.filter ((r) => r.commentId == c.commentId)
//       });
//     }
//   })
// );

// console.log(result);
