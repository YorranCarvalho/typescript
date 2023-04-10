import { Route, Route as Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages";
import { Navigate } from "react-router-dom";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/inicio" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/inicio" />} />

            </Switch>
        </BrowserRouter>
    );
}