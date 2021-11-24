import faker from 'faker';

const newNotification = () => ({
  type: 'TASK',
  title: faker.lorem.words(2),
  is_disabled: false,
  content: faker.lorem.words(20),
  status: 'READ',
});

export default newNotification;
