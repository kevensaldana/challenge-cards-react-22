import { useEffect } from "react";
import { useUser } from "./contexts/shared/hooks/useUser";
import { Http } from "./contexts/shared/infra";
import CardsView from "./contexts/cards/CardsView";
import tokenInterceptor from "./contexts/shared/infra/TokenInterceptor";
import { CardsProvider } from "./contexts/cards/CardsContext";
import { AuthProvider } from "./contexts/shared/contexts";

Http.addRequestInterceptors([tokenInterceptor()]);

function App() {
  const { user, loadUser } = useUser();

  useEffect(() => {
    if (!user?.token) {
      loadUser();
    }
  }, []);

  return user?.token ? (
    <AuthProvider>
      <CardsProvider>
        <CardsView />
      </CardsProvider>
    </AuthProvider>
  ) : (
    <span>Loading...</span>
  );
}

export default App;
