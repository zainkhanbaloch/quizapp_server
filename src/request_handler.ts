import { Request, Response } from "express";
import * as fs from "fs";

const dataToSend = [
  { subject: "computer", questions: 5 },
  { subject: "physics", questions: 5 },
  { subject: "maths", questions: 5 },
];

type get_questions_schema = {
  subject: string;
  questions: number;
};

function generateRandomNumbers(length: number, min: number, max: number): number[] {
  if (max - min + 1 < length) {
    throw new Error("Cannot generate unique random numbers with the given range and length.");
  }

  const uniqueNumbers: Set<number> = new Set();
  while (uniqueNumbers.size < length) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(randomNum);
  }

  // Convert the set to an array for the final result
  const uniqueNumbersArray = Array.from(uniqueNumbers);
  console.log(uniqueNumbersArray);
  return uniqueNumbersArray;
}

type Questions = {
  prompt: string;
  answer: string;
  options: string[];
};

type ReadFileType<T> = {
  data?: T[];
  error?: string;
};

async function readQuestionsFile(
  subject: string
): Promise<ReadFileType<Questions>> {
  const jsonFilePath = `./src/${subject}_questions.json`;

  try {
    const data = await fs.promises.readFile(jsonFilePath, "utf8");
    const jsonData = JSON.parse(data) as Questions[];
    return { data: jsonData };
  } catch (err) {
    console.error(`Error reading/parsing JSON file: ${err.message}`);
    return { error: err.message };
  }
}

async function getQuestions(data: get_questions_schema[]): Promise<Questions[]> {
  const questionPromises = data.map(async (block) => {
    const subject: string = block.subject;
    const requiredQuestions: number = block.questions;
    //console.log(subject, requiredQuestions);

    const questionsFile = await readQuestionsFile(subject);
    if (questionsFile.error) {
      console.error(questionsFile.error);
      return []; // Return an empty array in case of an error
    } else {
      const questions = questionsFile.data;
      //console.log("Parsed questions:", questions);

      const randomNumbers: number[] = generateRandomNumbers(requiredQuestions, 0, questions.length - 1);
      const generatedQuestions: Questions[] = randomNumbers.map((index) => questions[index]);
      return generatedQuestions;
    }
  });

  // Use Promise.all to wait for all questionPromises to resolve
  const results = await Promise.all(questionPromises);
  return results.flat(); // Flatten the array of arrays
}

async function handleGetQuestions(req: Request, res: Response): Promise<void> {
  const required_questions: get_questions_schema[] = req.body;
  console.log(`request body is ${req.body}`);
  console.log("a request was received")
  try {
    const response = await getQuestions(required_questions);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export default handleGetQuestions;
