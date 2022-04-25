export type UserWithoutPassword = Omit<User, 'password'>;

export type UserWithoutCountAndPassword = Omit<User, 'password'>;
