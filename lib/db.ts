import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

// DB에 데이터를 생성하고 만들며 소통하는 방법
//create 외에 다양한 함수들을 제공한다
async function test() {
  const token = await db.sMSToken.findUnique({
    where: {
      id: 1,
    },
  });
  console.log(token);
}
test();
export default db;
