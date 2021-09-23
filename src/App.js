import { Route, Switch } from "react-router-dom";
import AllBoatsPage from "./pages/AllBoats";
import Layout from "./components/layout/Layout";

function App() {
  // localhost:3000/
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllBoatsPage />
        </Route>
      </Switch>
    </Layout>
  );
}
export default App;
