import faker from 'faker';

const newTaskComment = () => ({
  is_disabled: false,
  content: faker.lorem.words(100),
});

export default newTaskComment;
