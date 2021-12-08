import { HabitsProvider } from "./habits/habits";
import { UserProvider } from "./user/user";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <HabitsProvider>{children}</HabitsProvider>
    </UserProvider>
  );
};
export default Providers;
