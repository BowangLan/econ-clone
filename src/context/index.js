import React from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const SCardContext = React.createContext();

export const useSCard = () => {
  return React.useContext(SCardContext);
};

const SCardWrapper = ({ children }) => {
  const [cardItems, setCardItems] = useLocalStorageState("scard", []);

  const getById = (id) => {
    const t = cardItems.filter((e1) => e1.uniqpid === id);
    return t[0];
  };

  const addOne = (e) => {
    console.log("add to list", e);
    if (getById(e.uniqpid)) {
      setCardItems((old) =>
        old.map((item) => {
          return item.uniqpid === e.uniqpid
            ? { ...item, count: item.count + 1 }
            : { ...item };
        })
      );
    } else {
      setCardItems((old) => [...old, {...e, count: 1}]);
    }
    console.log("added");
  };

  const removeOne = (item) => {
    console.log("remove one", item);
    const e = getById(item.uniqpid);
    if (!e) return;
    else if (e.count === 1) {
      setCardItems((old) => old.filter((e) => e.uniqpid !== item.uniqpid));
    } else {
      setCardItems((old) =>
        old.map((item) => {
          return item.uniqpid === e.uniqpid
            ? { ...item, count: item.count - 1 }
            : { ...item };
        })
      );
    }
  };

  return (
    <SCardContext.Provider
      value={{ cardItems, setCardItems, addOne, removeOne }}
    >
      {children}
    </SCardContext.Provider>
  );
};

export default function GlobalContextWrapper({ children }) {
  return <SCardWrapper>{children}</SCardWrapper>;
}
