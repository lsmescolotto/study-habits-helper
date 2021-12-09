import { GroupProviders } from "./groups/groups";
import { HabitsProvider } from "./habits/habits";
import { UserProvider } from "./user/user";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <HabitsProvider>
        <GroupProviders>{children}</GroupProviders>
      </HabitsProvider>
    </UserProvider>
  );
};
export default Providers;
