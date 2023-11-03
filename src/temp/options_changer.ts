// import { PrismaClient } from "@prisma/client";
// // import { faker } from "@faker-js/faker";

// const prisma = new PrismaClient();

// export default async function changeOptions() {
//     for (let index = 1; index < 6105; index++) {      
//         const retreivedQuestion = await prisma.question.findFirst(
//             {
//                 where : {
//                     id: index + 1
//                 }
//             }
//         );

//         let retreivedOptions : string[]

//         if (retreivedQuestion != null) {
//             retreivedOptions  = [retreivedQuestion?.optionA, retreivedQuestion?.optionB, retreivedQuestion?.optionC, retreivedQuestion?.optionD];
//         } else {
//             retreivedOptions = ["","","",""]
//         }
        
        
//         const newQuestion = await prisma.question.update({
//             where: {
//                 id : index + 1
//             },
//             data : {
//                 options : retreivedOptions
//             }
//         })

//         console.log(newQuestion)
//     }

// }

