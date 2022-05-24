import { restricted, unRestricted } from '../authConfig';

class InvitationAuthConfig {
  aggregateInvitation = restricted;
  invitation = unRestricted;
  invitations = unRestricted;
  createInvitation = unRestricted;
  createManyInvitation = restricted;
  deleteInvitation = restricted;
  deleteManyInvitation = restricted;
  findFirstInvitation = unRestricted;
  groupByInvitation = restricted;
  updateInvitation = unRestricted;
  updateManyInvitation = restricted;
  upsertInvitation = restricted;
}

export default InvitationAuthConfig;
