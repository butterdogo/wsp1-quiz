import express from "express"
const router = express.Router()


router.get("/", (req, res) => {

    res.render("quiz.njk", {

        message: "Quiz"
    })

})
/*
{
  id: "qn",
  text: "?",
  answers: ["1", "2", "3", "4"],
  correctAnswer: "1",
}
*/
const questions = [
    {
        id: "q1",
        text: "Hur många hjul har en bil?",
        answers: [3, 12, 5, 4],
        correctAnswer: 4,
    },
    {
        id: "q2",
        text: "gurkan kostar?",
        answers: [13, 23, 14.95, 18],
        correctAnswer: 14.95,
      },
      {
        id: "q3",
        text: "Vart bor Oscar?",
        answers: ["Gumboda", "Flurkmark", "Burträsk", "Bjurholm"],
        correctAnswer: "Bjurholm",
      },
      {
        id: "q4",
        text: "Vilket spel är mest nörd?",
        answers: ["Marvel crisis protocol", "WH 40K", "WH AoS", "WH Killteam"],
        correctAnswer: "Marvel crisis protocol",
      },
     
]

router.get("/questions", (req, res) => {

    res.render("questions.njk", {
        message: "Quiz questions",
        questions
    })

    
})

router.post("/end", (req, res) => {
    const answers = req.body
    
    console.log(answers)
    const result = questions.map(question => {
    
      const answer = answers[question.id]
      return {
        question: question.text,
        answer,
        correct: answer == question.correctAnswer
      }
    })
    res.render("result.njk", {
      message: "Ditt resultat",
      result
    })
  })


export default router