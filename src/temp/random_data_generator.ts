import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
function getRandomNumber(min: number, max: number): number {
  const randomFloat = Math.random();
  const range = max - min;
  const randomInRange = randomFloat * range + min;
  return Math.floor(randomInRange);
}

// function randomTopics() {

// }

import fs from "fs";

function readJSONFile<T>(filePath: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const jsonData = JSON.parse(data) as T;
          resolve(jsonData);
        } catch (jsonError) {
          reject(jsonError);
        }
      }
    });
  });
}

let mydata: any;

async function generateRandomQuestions() {
  const randomOptions: any = {
    a: faker.word.noun(),
    b: faker.word.noun(),
    c: faker.word.noun(),
    d: faker.word.noun(),
  };
  // const subject_id = [1, 2, 3, 4, 5];
  // const class_id = [1, 2];
  const difficulty_level_id = [1, 2, 3];
  const randomNumber = getRandomNumber(0, mydata.length - 1);
  const randomTopic = mydata[randomNumber];
  function getrandmonoption () : string{
    const mynumber = getRandomNumber(0, 3);
    switch (mynumber) {
      case 0:
        return randomOptions.a
      case 1:
        return randomOptions.b
      case 2:
        return randomOptions.c
      case 3:
        return randomOptions.d
      default:
        return randomOptions.a
    }
  }

  const randomQuestion: any = {
    prompt: faker.lorem.sentence(),
    optionA: randomOptions.a,
    optionB: randomOptions.b,
    optionC: randomOptions.c,
    optionD: randomOptions.d,
    explanation: faker.lorem.sentence(),
    topicId: randomNumber + 1,
    subjectId: randomTopic.subjectId,
    classId: randomTopic.classId,
    difficultyLevelId: difficulty_level_id[2],
    answer: getrandmonoption(),

  };
  // console.log(randomQuestion)

  const myquestion = await prisma.question.create({
    data: randomQuestion,
  });
  console.log(myquestion);
}

// Usage example
const jsonFilePath = "./src/topics.json";
// Replace with your file path
async function main() {
  try {
    mydata = await readJSONFile<any[]>(jsonFilePath);
    // console.log(mydata);
    generateRandomQuestions();

    // You can now use the `jsonData` variable as needed.
  } catch (error) {
    console.error("Error reading JSON file:", error);
  }
}

for(let i: number = 0; i < 1000; i++){
  main();
}
