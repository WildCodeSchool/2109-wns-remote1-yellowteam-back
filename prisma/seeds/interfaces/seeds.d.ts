import { User } from 'src/generated/graphql';

type FakeUser = Omit<User, 'id' | 'updated_at' | 'created_at'>;
