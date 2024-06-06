import { AppLayout } from "components/common";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
