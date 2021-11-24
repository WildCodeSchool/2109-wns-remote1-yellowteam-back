import faker from 'faker';

const newTaskNotification = () => ({
  is_disabled: false,
  content: faker.lorem.words(20),
});

export default newTaskNotification;
