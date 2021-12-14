import { GroupProviders } from "./groups/groups";
import { HabitsProvider } from "./habits/habits";
import { UserProvider } from "./user/user";
import { GoalsProvider } from "./goal/goal";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <HabitsProvider>
        <GroupProviders>
          <GoalsProvider>{children}</GoalsProvider>
        </GroupProviders>
      </HabitsProvider>
    </UserProvider>
  );
};
export default Providers;
