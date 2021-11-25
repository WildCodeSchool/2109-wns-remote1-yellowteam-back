import faker from 'faker';
import { endDate, randomStatus, startDate } from './seedsService';

const newTask = () => {
  const start = startDate();
  const end = endDate(start);

  return {
    title: faker.company.catchPhrase(),
    description: faker.lorem.paragraph(),
    private: false,
    is_disabled: false,
    status_task: randomStatus(),
    total_time_spent: 216753972,
    start_date: start.toJSDate(),
    end_date: end.toJSDate(),
  };
};
export default newTask;
