import { PrismaClient } from "@prisma/client";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function seed() {
    const professor1 = await prisma.user.create({
        data: {
            name: 'Professor 1',
            email: 'professor1@email.com',
            password: await bcrypt.hash('password', roundsOfHashing),
            bio: 'Bio from professor 1',
            role: 'PROFESSOR',
            project: {
                create: [
                    {
                        title: 'Professor 1 project 1',
                        description: 'Description',
                        content: 'Content for project 1 from professor 1'
                    },
                    {
                        title: 'Professor 1 project 2',
                        description: 'Description',
                        content: 'Content for project 2 from professor 1'
                    },
                    {
                        title: 'Professor 1 project 3',
                        description: 'Description',
                        content: 'Content for project 3 from professor 1'
                    }
                ]
            },
            Tutorial: {
                create: [
                    {
                        title: 'Professor 1 tutorial 1',
                        description: 'Description',
                        level: 1,
                        content: 'Content for tutorial 1 from professor 1'
                    },
                    {
                        title: 'Professor 1 tutorial 2',
                        description: 'Description',
                        level: 2,
                        content: 'Content for tutorial 2 from professor 1'
                    },
                    {
                        title: 'Professor 1 tutorial 3',
                        description: 'Description',
                        level: 3,
                        content: 'Content for tutorial 3 from professor 1'
                    },
                ]
            }
        }
    })

    const professor2 = await prisma.user.create({
        data: {
            name: 'Professor 2',
            email: 'professor2@email.com',
            password: await bcrypt.hash('password', roundsOfHashing),
            bio: 'Bio from professor 2',
            role: 'PROFESSOR',
            project: {
                create: [
                    {
                        title: 'Professor 2 project 1',
                        description: 'Description',
                        content: 'Content for project 1 from professor 2'
                    },
                    {
                        title: 'Professor 2 project 2',
                        description: 'Description',
                        content: 'Content for project 2 from professor 2'
                    },
                    {
                        title: 'Professor 2 project 3',
                        description: 'Description',
                        content: 'Content for project 3 from professor 2'
                    }
                ]
            },
            Tutorial: {
                create: [
                    {
                        title: 'Professor 2 tutorial 1',
                        description: 'Description',
                        level: 1,
                        content: 'Content for tutorial 1 from professor 2'
                    },
                    {
                        title: 'Professor 2 tutorial 2',
                        description: 'Description',
                        level: 2,
                        content: 'Content for tutorial 2 from professor 2'
                    },
                    {
                        title: 'Professor 2 tutorial 3',
                        description: 'Description',
                        level: 3,
                        content: 'Content for tutorial 3 from professor 2'
                    },
                ]
            }
        }
    })

    const student1 = await prisma.user.create({
        data: {
            name: 'Student 1',
            email: 'student1@email.com',
            password: await bcrypt.hash('password', roundsOfHashing),
            bio: 'Bio from student 1',
            role: 'STUDENT',
            project: {
                create: [
                    {
                        title: 'Student 1 project 1',
                        description: 'Description',
                        content: 'Content for project 1 from Student 1'
                    },
                    {
                        title: 'Student 1 project 2',
                        description: 'Description',
                        content: 'Content for project 2 from Student 1'
                    },
                    {
                        title: 'Student 1 project 3',
                        description: 'Description',
                        content: 'Content for project 3 from Student 1'
                    }
                ]
            }
        }
    })

    const student2 = await prisma.user.create({
        data: {
            name: 'Student 2',
            email: 'student2@email.com',
            password: await bcrypt.hash('password', roundsOfHashing),
            bio: 'Bio from student 2',
            role: 'STUDENT',
            project: {
                create: [
                    {
                        title: 'Student 2 project 1',
                        description: 'Description',
                        content: 'Content for project 1 from Student 2'
                    },
                    {
                        title: 'Student 2 project 2',
                        description: 'Description',
                        content: 'Content for project 2 from Student 2'
                    },
                    {
                        title: 'Student 2 project 3',
                        description: 'Description',
                        content: 'Content for project 3 from Student 2'
                    }
                ]
            }
        }
    })

    const student3 = await prisma.user.create({
        data: {
            name: 'Student 3',
            email: 'student3@email.com',
            password: await bcrypt.hash('password', roundsOfHashing),
            bio: 'Bio from student 3',
            role: 'STUDENT',
            project: {
                create: [
                    {
                        title: 'Student 3 project 1',
                        description: 'Description',
                        content: 'Content for project 1 from Student 3'
                    },
                    {
                        title: 'Student 3 project 2',
                        description: 'Description',
                        content: 'Content for project 2 from Student 3'
                    },
                    {
                        title: 'Student 3 project 3',
                        description: 'Description',
                        content: 'Content for project 3 from Student 3'
                    }
                ]
            }
        }
    })

    const admin = await prisma.user.create({
        data: {
            name: 'Admin',
            email: 'admin@email.com',
            password: await bcrypt.hash('password', roundsOfHashing),
            bio: 'Bio from admin',
            role: 'ADMIN',
            Tutorial: {
                create: [
                    {
                        title: 'Tutorial 1 create by admin',
                        description: 'Description',
                        level: 1,
                        content: 'Content for tutorial 1 create by admin',
                    },
                    {
                        title: 'Tutorial 2 create by admin',
                        description: 'Description',
                        level: 1,
                        content: 'Content for tutorial 2 create by admin',
                    },
                    {
                        title: 'Tutorial 3 create by admin',
                        description: 'Description',
                        level: 1,
                        content: 'Content for tutorial 3 create by admin',
                    },
                ]
            }
        }
    })
}

seed()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
