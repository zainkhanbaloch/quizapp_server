import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default prisma;

// export async function handledb() {
//   console.time('handledb'); // Start the timer

//   const myclass = await prisma.question.findMany({
//     where: {
      
     
//       classId : 1,
//     }
//   });
  
//   console.log(myclass);
  
//   console.timeEnd('handledb'); // End the timer and log the elapsed time
// }

  
// handledb()
// .then(async () => {
//   await prisma.$disconnect()
// })
// .catch(async (e) => {
//   console.error(e)
//   await prisma.$disconnect()
//   process.exit(1)
// })
