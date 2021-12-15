import { GroupProviders } from "./groups/groups";
import { HabitsProvider } from "./habits/habits";
import { UserProvider } from "./user/user";
import { GoalsProvider } from "./goal/goal";
import { ActivitiesProvider } from "./activities/activities";
//teste kk
const Providers = ({ children }) => {
  return (
    <UserProvider>
      <HabitsProvider>
        <GroupProviders>
          <GoalsProvider>
            <ActivitiesProvider>{children}</ActivitiesProvider>
          </GoalsProvider>
        </GroupProviders>
      </HabitsProvider>
    </UserProvider>
  );
};
export default Providers;
