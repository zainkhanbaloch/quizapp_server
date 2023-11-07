
// type get_questions_schema = {
//     subject: string;
//     questions: number;
//   };
  
//   type Questions = {
//     prompt: string;
//     answer: string;
//     options: string[];
//   };
  
  
  
//   async function getQuestions(
//     data: get_questions_schema[]
//   ): Promise<Questions[]> {
//     const questionPromises = data.map(async (block) => {
//       const subject: string = block.subject;
//       const requiredQuestions: number = block.questions;
//       //console.log(subject, requiredQuestions);
  
//       const questionsFile = await readQuestionsFile(subject);
//       if (questionsFile.error) {
//         console.error(questionsFile.error);
//         return []; // Return an empty array in case of an error
//       } else {
//         const questions: any = questionsFile.data;
//         //console.log("Parsed questions:", questions);
  
//         const randomNumbers: number[] = generateRandomNumbers(
//           requiredQuestions,
//           0,
//           questions.length - 1
//         );
//         const generatedQuestions: Questions[] = randomNumbers.map(
//           (index) => questions[index]
//         );
//         return generatedQuestions;
//       }
//     });
  
//     // Use Promise.all to wait for all questionPromises to resolve
//     const results = await Promise.all(questionPromises);
//     return results.flat(); // Flatten the array of arrays
//   }