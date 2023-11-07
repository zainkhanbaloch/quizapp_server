// import * as fs from "fs";

// type Questions = {
//     prompt: string;
//     answer: string;
//     options: string[];
//   };

// type ReadFileType<T> = {
//     data?: T[];
//     error?: string;
//   };
  
//   async function readQuestionsFile(
//     subject: string
//   ): Promise<ReadFileType<Questions>> {
//     const jsonFilePath = `./src/${subject}_questions.json`;
  
//     try {
//       const data = await fs.promises.readFile(jsonFilePath, "utf8");
//       const jsonData = JSON.parse(data) as Questions[];
//       return { data: jsonData };
//     } catch (err: any) {
//       console.error(`Error reading/parsing JSON file: ${err.message}`);
//       return { error: err.message };
//     }
//   }

// export default readQuestionsFile