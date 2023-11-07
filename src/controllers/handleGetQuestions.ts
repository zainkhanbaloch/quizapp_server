import { Request, Response } from "express";


async function handleGetQuestions(req: Request, res: Response): Promise<void>{



}

export default handleGetQuestions;
































// const dataToSend = [
//   { subject: "computer", questions: 5 },
//   { subject: "physics", questions: 5 },
//   { subject: "maths", questions: 5 },
// ];


// async function handleGetQuestions(req: Request, res: Response): Promise<void> {
//   const required_questions: get_questions_schema[] = req.body;
//   console.log(`request body is ${req.body}`);
//   console.log("a request was received");
//   try {
//     const response = await getQuestions(required_questions);
//     const response = await prisma.question.findMany({
//       where: {
//         classId: 1,
//       },
//     });
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// }
