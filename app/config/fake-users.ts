import type { UserRole } from "./navigation";

export type FakeUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
};

export const fakeUsers: FakeUser[] = [
  {
    id: "admin-001",
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: "student-001",
    name: "Student User",
    email: "student@example.com",
    password: "student123",
    role: "student",
  },
];

export const defaultFakeUser = fakeUsers[0];

export function authenticateFakeUser(email: string, password: string) {
  return fakeUsers.find(
    (user) => user.email === email && user.password === password,
  );
}
