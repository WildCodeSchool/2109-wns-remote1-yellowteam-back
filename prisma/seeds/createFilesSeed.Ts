import faker from 'faker';

const newFile = () => ({
  name: faker.name.title(),
  path: faker.internet.url(),
  size: faker.random.number(5),
  type: faker.lorem.word(1),
  is_disabled: false,
});
export default newFile;
