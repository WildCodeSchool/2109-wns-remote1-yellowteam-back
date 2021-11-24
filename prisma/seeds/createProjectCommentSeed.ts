import faker from 'faker';

const newProjectComment = () => ({
  is_disabled: false,
  content: faker.lorem.words(100),
});

export default newProjectComment;
