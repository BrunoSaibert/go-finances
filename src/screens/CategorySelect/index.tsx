import React from "react";
import { FlatList } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Button } from "../../components/Form/Button";

import { categories } from "../../utils/categories";

import * as S from "./styles";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  function handleCategorySelect(category: Category) {
    setCategory(category);
  }
  return (
    <S.Container>
      <S.Header>
        <S.Title>Categoria</S.Title>
      </S.Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <GestureHandlerRootView>
            <S.Category
              onPress={() => handleCategorySelect(item)}
              isActive={category.key === item.key}
            >
              <S.Icon name={item.icon} />
              <S.Name>{item.name}</S.Name>
            </S.Category>
          </GestureHandlerRootView>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />

      <S.Footer>
        <GestureHandlerRootView>
          <Button title="Selecionar" onPress={closeSelectCategory} />
        </GestureHandlerRootView>
      </S.Footer>
    </S.Container>
  );
}
