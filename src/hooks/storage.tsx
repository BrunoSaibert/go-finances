import React, { createContext, ReactNode, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface StorageProviderProps {
  children: ReactNode;
}

interface StorageContextData {
  setItem: (storageKey: string, data: any) => Promise<void>;
  getItem: (storageKey: string) => Promise<string | null>;
  removeItem: (storageKey: string) => Promise<void>;
}

const StorageContext = createContext({} as StorageContextData);

function StorageProvider({ children }: StorageProviderProps) {
  async function setItem(storageKey: string, data: any) {
    await AsyncStorage.setItem(storageKey, JSON.stringify(data));
  }

  async function getItem(storageKey: string) {
    const responseStorage = await AsyncStorage.getItem(storageKey);

    return responseStorage;
  }

  async function removeItem(storageKey: string) {
    await AsyncStorage.removeItem(storageKey);
  }

  return (
    <StorageContext.Provider value={{ setItem, getItem, removeItem }}>
      {children}
    </StorageContext.Provider>
  );
}

function useStorageData() {
  const context = useContext(StorageContext);

  return context;
}

export { StorageProvider, useStorageData };
