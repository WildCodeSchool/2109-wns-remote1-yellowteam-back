import faker from 'faker';
import { dueDate, endDate, randomStatus, startDate } from './seedsService';

const newProject = () => {
  const start = startDate().plus({
    days: Math.floor(Math.random() * 30),
    month: Math.floor(Math.random() * 4),
  });
  const end = endDate(start);
  const due = dueDate(end);

  return {
    title: faker.company.companyName(),
    description: faker.lorem.paragraph(),
    private: false,
    is_disabled: false,
    status_project: randomStatus(),
    total_time_spent: 216753972,
    start_date: start.toJSDate(),
    end_date: end.toJSDate(),
    due_date: due.toJSDate(),
  };
};

export default newProject;
