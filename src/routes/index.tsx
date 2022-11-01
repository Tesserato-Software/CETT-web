import { Route, Routes } from "react-router-dom";
import { NavBar } from "../Components/Navbar/NavBar";
import { Atacharchive } from "../page/AtachArchive";
import { Egress } from "../page/egress";
import { EgressList } from "../page/egress/list";
import { Hierarchy } from "../page/Hierarchy";
import { HierarchyList } from "../page/Hierarchy/List";
import { Login } from "../page/Login";
import { AtachEgress } from './../page/AtachEgress/index';
import { DetachEgress } from './../page/DetachEgress/index';
import { DetachArchive } from './../page/DetachArchive/index';


export const MainRouts = () => {
  return (
    <>
      <NavBar
        title={"Navbar"}
        have_menu={!window.location.href.includes("login")}
      />
      <Routes>
        <Route
          index
          path="/"
          element={
            <>
              <h1>index</h1>
            </>
          }
        />
        <Route path="login" element={<Login />} />

        <Route
          path="about"
          element={
            <>
              <h1>about</h1>
            </>
          }
        />

        <Route
          path="archive"
          element={<Atacharchive/>}
        />
        <Route
          path="atachegress"
          element={<AtachEgress/>}
        />
          <Route
          path="detachegress"
          element={<DetachEgress/>}
        />
      
          <Route
          path="detachearchive"
          element={<DetachArchive/>}
        />





        <Route path="egress" element={<EgressList />}>
          <Route path="list" element={<EgressList />} />
        </Route>
        <Route path="hierarchy" element={<Hierarchy />}>
          <Route path="list" element={<HierarchyList />} />
        </Route>
      </Routes>
    </>
  );
};
