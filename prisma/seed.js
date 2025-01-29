const { PrismaClient } = require("@prisma/client");
const data = require("./mock-data.json");
const prisma = new PrismaClient();

async function main() {
  const clerkId = "user_2qZcYUuPkDyGcWvQpTEWIECm7QK";

  const jobs = data.map((job) => {
    return {
      ...job,
      clerkId,
    };
  });

  for (const job of jobs) {
    console.log(job); // Debugging
    await prisma.job.create({
      data: job,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });