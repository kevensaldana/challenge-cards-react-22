import { useEffect } from "react";
import { AuthProvider } from "./contexts";
import { useUser } from "./hooks";
import { Http, tokenInterceptor } from "./http";
import { CardsView } from "./pages/cards";
import { CardsProvider } from "./pages/cards/CardsContext";

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
