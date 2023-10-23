import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function handledb() {
    // const myclass = await prisma.question.findMany({
    //     where: {
    //         subject: {
    //           name: "maths"
    //         }
    //       }
    // }        
    // )
    const myclass = await prisma.question.findMany({
        where: {
            subject: {
              name: "aths"
            }
          }
    })
    console.log(myclass)
}
  
handledb()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
