import { RequestHandler } from "express";
import { Comment, File, Invitation, Notification, Project, Role, Task } from ".prisma/client";

// id            String         @id @default(uuid())
// name          String
// email         String
// password      String
// isDisabled    Boolean
// role          Role[]
// projects      Project[]
// task          Task[]
// files         File[]
// comments      Comment[]
// invitation    Invitation[]
// notifications Notification[]
interface UserWithoutPassword {
    id: string;
    name: string;
    email: string;
    isDisabled: boolean;
    role: Role;
    projects: Project;
    task: Task;
    files: File;
    comments: Comment;
    invitation: Invitation;
    notifications: Notification;
}

export default interface UserHandlers {
    getAll: RequestHandler<Record<string, never>, UserWithoutPassword[], null>;
    getOne: RequestHandler<{id: string}, User>
}