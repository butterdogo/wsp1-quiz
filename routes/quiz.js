import express from "express"
const router = express.Router()


router.get("/", (req, res) => {

    res.render("quiz.njk", {

        message: "Quiz"
    })

})

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
        text: "Hur många ben har en gnu?",
        answers: ["två", "sju", "tre", "fyra"],
        correctAnswer: "fyra",
      }

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
    questions.forEach(question => {
      const answer = answers[question.id]
      if (answer == question.correctAnswer) {
        console.log("Du har svarat rätt på fråga : ", question.id)
      }
    })
    res.json(answers)
  })


export default router